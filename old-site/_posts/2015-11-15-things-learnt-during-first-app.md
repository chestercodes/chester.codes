---
layout: post
title: First app - things learnt.
excerpt: Things learnt whilst writing first phone app
issue: 5
tags: 
- c-sharp
- mvvmcross
- windows-phone
- mobile
---

I have recently finished my first windows phone app.

My first experience using an VVM framework and the XAML stack. I learned a few whilst developing this, some obvious and some no so obvious. 

The app's purpose is to display data about the events happening in and around Bristol. The entry page is a 'pivot' style page that corresponds to a date and shows a summary of the events that are happening that day. The user can then tap on an event and see information such as the venue, price and headliners.

## Dynamic pivot view headers ##

Each of the days events is displayed in a list in a pivot page. The user can then swipe right or left to change days. The pivot page headers are generated dynamically so that they can display the date.
During development the list of event summaries was displaying but the header was writing out the type name of the view model. So instead of writing 'Monday 2nd' it was displaying 'DateViewModel'. 
It turns out that I had forgotten to implement the Pivot.HeaderTemplate in the XAML, this wasn't obvious in the documentation that I was reading that this needed to be implemented.

## Resuming mvvmcross behaviour ##

I'm just starting out with MVVMCross, it's been easy enough to pick up but there are a few things that I don't understand with mobile app development in general.

Navigation is a good example, when resuming the app an unexpected exception was being thrown and I couldn't understand why.

The exception related to not being able to navigate to MainPage.xaml. I had deleted this page as recommended from the Mvvmcross examples. This was still happening even when changing the WMAppManifest.xml DefaultTask element to another page. 

I didn't really find a satisfactory fix to this problem. To stop the exceptions and the app crashes I used a method found on stack overflow. I added a MainPage.xaml page and then overwrote the OnNavigatedTo method and called this.NavigationService.GoBack() method. 

The app now navigated to MainPage.xaml and then immediately calls the back button to return to the previous page. This leads to some weird behaviour when resuming an app on an event page but it means that the app doesn't crash.

## Designing app for cross platform ##

Whilst I didn't intend to create this app for more than the windows phone platform, the whole point of mvvmcross is that extending apps to multiple platforms should be as easy as possible.

Some of the viewmodel structure and names relate and refer to the pivot control on windows phone and this is obviously not a very good way to design things in a cross platform context.

I learnt that it's best to design and use naming conventions that will be applicable to all possible platforms and not use specific control names etc.
