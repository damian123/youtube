# YouTube Video Uploader using Google API

Upload videos to YouTube using Node.js. This script works for both personal and brand YouTube accounts.

## Features

- Video uploading to YouTube
- OAuth 2.0 Authorization
- Works with personal and brand YouTube accounts

## Dependencies

- Node.js
- Google API Node.js Client (`googleapis`)
- Readline (`readline`)
- Google Auth Library (`google-auth-library`)
- FileSystem (`fs`)
- Path (`path`)

## Setting Up Google API Credentials

Creating a `client_secret.json` involves creating a project on the Google Cloud Platform and enabling the necessary APIs. Here's how you can do it step-by-step:

### Step 1: Create a New Project

1. Visit the [Google Cloud Console](https://console.cloud.google.com/).
2. Click on the "Select a project" dropdown near the top-right corner and then click on "New Project" to create a new Google Cloud project.

### Step 2: Enable YouTube API

1. Once the project is created, navigate to "APIs & Services" > "Dashboard".
2. Click on "+ ENABLE APIS AND SERVICES" to go to the API library.
3. Search for "YouTube Data API v3" and enable it.

### Step 3: Create OAuth 2.0 Credentials

1. Go back to "APIs & Services" > "Dashboard", then click on "Credentials" on the sidebar.
2. Click on "Create Credentials" and select "OAuth client ID".
3. You'll be prompted to configure the OAuth consent screen. Fill in the required fields and save.
4. For "Application type", select "Desktop app" (or appropriate type based on your use case).
5. Enter a name for the OAuth client ID and click on "Create".

### Step 4: Download `client_secret.json`

1. After successfully creating the OAuth 2.0 client IDs, you'll be shown a dialog with the client ID and client secret.
2. You can click the download button (usually an icon that looks like a download arrow) to download the `client_secret.json` file.

### Step 5: Move the File to Your Project Directory

Move the `client_secret.json` to your project directory so that your code can access it.

Now you can use this `client_secret.json` in your application to authenticate against Google services. Keep this file secure and never expose it publicly.

And that's it! You've successfully created and downloaded a `client_secret.json` for your project.

## Installation and Setup

1. Clone the repository or download the code.
2. Run `npm install` to install required packages.
3. Place the `client_secret.json` file in the root directory.

## How to Run

Run the code using Node.js by providing the filename as a command-line argument:

```bash
node <filename_of_this_script.js> <path_to_video_file>
```

For example, if the script is named `index.js` and the video you wish to upload is named `my_video.mp4`:

```bash
node index.js my_video.mp4
```

## Arguments

- `fileName`: The path to the video file you want to upload. Provide this as a command-line argument when running the script.

## Authorization Process

After running the script, a URL will be generated in your command-line interface (CLI) that you need to visit to authorize your application.

### Steps to Follow:

1. Run the script using the `node` command:

    ```bash
    node <filename_of_this_script.js> <path_to_video_file>
    ```
    For example:
    
    ```bash
    node index.js my_video.mp4
    ```
    
2. Copy the URL printed in the console:

    ```
    Authorize this app by visiting this URL: [URL will be here]
    ```

3. Open this URL in a web browser.

4. You'll be prompted to log in to the Google Account you want to associate with this application.

5. After logging in, you'll be presented with a list of permissions that the application is requesting. Review these permissions and click "Allow" to proceed.

6. Once you've granted the permissions, you'll be redirected to a URL that looks something like this:

    ```
    http://localhost/?code=4/0Adeu5BWYLBcL1rLxkdFgASEr7ZT40DUIj13mVdLbeYNBZ0k4evAQ47ZgsUM9a5TkRO84MA&scope=https://www.googleapis.com/auth/youtube.upload
    ```

7. You're interested in the part right after `?code=` and before the `&scope`, which in this case is `4/0Adeu5BWYLBcL1rLxkdFgASEr7ZT40DUIj13mVdLbeYNBZ0k4evAQ47ZgsUM9a5TkRO84MA`. This is the authorization code.

8. Copy this code and paste it back in your CLI where it says `Enter the code from that page here:`.

9. Hit Enter.

Once you've completed these steps, the script will proceed to upload the video to your YouTube account. A `token.json` file will also be created, storing your tokens for future use so you won't have to go through the authorization process again.


## Main Functions

- `readCode`: Reads the Google Auth code from the command line.
- `main`: The main function that handles authorization, sets up YouTube API parameters, and uploads the video.

## Support This Project

If you find this project helpful, you can support me by:

- Buying me a coffee on [Buy Me a Coffee](https://www.buymeacoffee.com/TheRealDamian)
[QR Code](https://github.com/damian123/youtube/raw/main/bmc_qr.png)

Your support is much appreciated!

## License

This project is open source, feel free to use and modify.

## Contributing

Contributions are welcome. Please submit a pull request or create an issue to discuss changes.

For more information, feel free to contact the maintainers.
