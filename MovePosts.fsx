open System
open System.IO
open System.Text.RegularExpressions

type FileParts = { Slug: string; Date: DateTime; Issue: int }
let sourceDir = "./old-site/_posts"
let destDir = "./content/posts"
let parseFile (path: string) = 
  let name = Path.GetFileName(path)
  let parts = name.Split('-')
  let datetime = new DateTime(int parts.[0], int parts.[1], int parts.[2])
  let slug = (String.Join ("-", (Array.skip 3 parts))).Replace(".md", "")
  let content = File.ReadAllText(path)
  let issueRegex = Regex("issue:.*")
  let issueLine = issueRegex.Match(content).Value
  let issue = int (issueLine.Split(' ')).[1]
  
  {
    Slug = slug
    Date = datetime
    Issue = issue
  }

let getDestPath parsed =
  let dir = parsed.Issue.ToString("000") + "-" + parsed.Date.ToString("yyyy-MM-dd") + "-" + parsed.Slug
  Path.Combine(destDir, dir, "post.md")

let writeFile sourcePath destPath fileParts =
  let content = File.ReadAllText(sourcePath)
  let parts = content.Split([|"---"|], StringSplitOptions.None)
  let slug = sprintf "slug: \"%s\"" (fileParts.Slug)
  let date = sprintf "date: \"%s\"" (fileParts.Date.ToString("yyyy/MM/dd"))
  let category = sprintf "category: Tech"
  let newFrontMatter = slug + Environment.NewLine + date + Environment.NewLine + category
  let newContent = "---" + parts.[1] + newFrontMatter + Environment.NewLine + "---" + Environment.NewLine + parts.[2]
  File.WriteAllText(destPath, newContent)
  ()

for post in (Directory.GetFiles(sourceDir, "*.md")) do
  let absPath = Path.GetFullPath(post)
  let parsed = parseFile (absPath)
  let destPath = getDestPath parsed
  let dir = Directory.GetParent(destPath)
  if Directory.Exists(dir.FullName) = false then
    Directory.CreateDirectory(dir.FullName) |> ignore
  writeFile absPath destPath parsed
  
