// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
 // No tabs or host permissions needed! Be carefull, it's danger!!!!
  console.log('Turning ' + tab.url + ' blue!');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="blue"'
  });
 alert('Đã bảo Pre-Alpha còn cố Down');
 });