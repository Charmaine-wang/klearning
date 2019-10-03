## Feedback

 1. Be consistent with Swedish and English when naming files and folders
 2. MediaOne/index.js:28 Function name differs from foldername
 3. MediaOne/index.js - Delete comments from code...
 4. Mediatwo/index.js - Delete comments from code...
 5. .env-file shall be included in the .gitignore-file
 6. .env file shall be duplicated as .env-example
 7. Page: /course/flow complains about invalid DOM property stroke-Linecap (Change stroke-Linecap to strokeLinecap)
 8. Page: /course/flow complains about invalid DOM property stroke-Linejoin (Change stroke-Linejoin to strokeLinejoin)
 9. Page: /course/flow props.location.state.mediaPreset is always undefined on first course page
 10. CourseFlow/index.js:33 setMediaState is never used in useState()
 11. CourseFlow/index.js:67-93, 103-129 mediaState is checked for video/sound or text but is only set when you click "Nästa Lektion"
 12. pages/CourseFlow/index.js:1-3 Remove comments
 13. UploadButton/index.js:37 Remove Comment
 14. VideoCard/index.js:14 Remove Comment
 15. Text/Video/Audio is sometimes changed by state in and sometimes changed by props which is very confusing
 16. MediaOne and Mediatwo contains the same code, the content is different. Maybe consider to dynamically switch out content instead.
 17. MediaOne/index.js:31-39 props->sound/text/video is not set the first time you visit a course page and displays errors in the console
 18. Mediatwo/index.js:30-38 props->sound/text/video is not set the first time you visit a course page and displays errors in the console
 19. AboutCourse/index.js:24 Margin and margin-top is defined, margin-top is commented out and should be removed
 20. AlternativeDrop/index.js:1-4 Remove comments