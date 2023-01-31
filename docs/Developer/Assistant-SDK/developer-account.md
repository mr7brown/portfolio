---
sidebar_label: "Configure Developer Account and Account Settings"
sidebar_position: 1
tags: [Account Configuration, Google Assistant SDK, VS Code, Google]
---

# Configure Developer Account and Account Settings

<!-- :::note Note:

For this doc, I was the sole author. To write this Raspberry Pi configuration doc, I worked directly with Google engineers to test and configure the Pi to configuire and test the USB microphone/speaker.

The software and tools used to complete this doc can be found under **Tags** at the end of the doc.

::: -->

## Overview

To access to Google Assistant SDK, developers need to configure a project
and their developer account settings in the Actions Console. These are the last
steps required before installing the SDK.

## Configure developer account settings

To enable access to the Google Assistant API, complete the following:

1.  Open the [Actions Console](https://console.actions.google.com/).

2.  Click **Add/import project**.

3.  To create a new project, Enter your project's name in the **Project Name** field, then click **CREATE PROJECT**.

    Alternatively, if you already have an existing Google Cloud Platform project,
    you can select that project and import it.

4.  If you created a new project, click the **Device registration** box near the bottom of the page.

    If you imported a previously-created project, this box will not be displayed. Instead, select the **Device Registration** tab (under **ADVANCED OPTIONS**) from the left navbar.

Keep this browser tab open. You will use it to register a device model in a later step.

5.  Enable the Google Assistant API on the project you selected. You need to do this in the Cloud Platform Console.

6.  Click [Enable API](https://console.developers.google.com/apis/api/embeddedassistant.googleapis.com/overview).

7.  You must configure the OAuth consent screen for your project in the Cloud Platform Console. Note that most fields on this page are optional.

### Set activity controls for your account

To use the Google Assistant, you must share certain activity data with Google. The Google Assistant needs this data to function properly and is not specific to the SDK.

Open the Activity Controls page for the Google account that you want to use with the Assistant. You can use any Google account, it does not need to be your developer account.

**Ensure the following toggle switches are enabled (blue):**

- Web & App Activity
  - Be sure to select the **Include Chrome history and activity from sites, apps, and devices that use Google services** checkbox.
- Device Information
- Voice & Audio Activity
