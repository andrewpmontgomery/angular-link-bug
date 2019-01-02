# LinkBug

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4,
then pared down to the minimum required to demonstrate the bug.

1. Download the project
2. npm install
3. npm start
4. Browse to http://localhost:4200/
5. Open the browser console (F12)

6. Click on "1. Sibling link from brother to (sister)"
   - that should work fine here
7. Click on "2. Sibling link from sister to... (brother)"
   - that should fail
   - the console should show the following error:
   > Error: Cannot match any routes. URL Segment: 'my-family/sister/../brother'
8. Click on "/other/animals" near the top
9. Click on "1. Sibling link from brother to (sister)"
   - that should fail, even though it worked at step #6 above
   - the console should show the following error:
   > Error: Cannot match any routes. URL Segment: 'other/animals/brother/sister'
10. Click on "Sister" under the Home menu, or navigate directly to /other/animals/sister
11. Click on "2. Sibling link from sister to... (brother)"
   - that should fail, as it did in step #7 above
   - the console should show the following error:
   > Error: Cannot match any routes. URL Segment: 'other/animals/sister/../brother'
12. Other weird behavior:
   - Click on "3. Parent link from sister to .." - nothing happens!
   - Click on "4. Double-parent link from sister to ../.." - the router loads the NieceComponent!
