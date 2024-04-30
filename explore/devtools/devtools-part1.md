Once it finishes downloading, answer the following questions in your devtools-part1.md:

1. What is the name of the new json file?
    - Name: citylots.jsonn

2. Which file initiated the download of the new file?
    - Initiator: expose.js:4
  
3. What is the file size of the downloaded file? (Hint: you can find this in the network tab, or the response headers)
    - Size: 114 B

4. How long did it take to download?
    - Time: 89 ms
 

Next, select that file to bring up a new side panel to answer the following:

5. What was your User-Agent for the browser that made the request?
    - User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36

6. In the response header, what type of server did it come from?
    - Server: GitHub.com

7. When was the file last modified?
    - Last-Modified: Thu, 15 Sep 2022 22:44:30 GMT

8. What was the Content-Type of the file?
    - Content-Type: application/json; charset=utf-8


Navigate to the Initiator tab now and answer the last question

9. Which function inside the initiating file made the request?
    - Answer: fetchData() is the function that directly fetches the citylots.json file after the click is being made from init().