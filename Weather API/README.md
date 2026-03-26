# Weather API Activity

Welcome to the Weather API Activity! 
This activity is an **OPTIONAL** activity for those who want to strengthen their skills on API & Postman. 
This activity will help you practice creating a simple API endpoint and testing it with Postman.

## Objective

You will edit the `server.js` file to create a route that returns weather information for a given city. You **do not** need to edit `index.html` or `script.js`.

## Steps

### 0. If you ALREADY forked:
1. Go to VS Code Terminal  
2. Open your folder where the repo lives  
3. Navigate to the folder:

```bash
cd path-to-your-folder
```
4. Pull the latest updates:

```bash
git pull
```

5. Switch to the required branch:

```bash
git checkout Day5
```

6. Continue from **Step 2**

---

### 1. Fork and Clone the Repository

- Fork this repository to your GitHub account.
- Clone your fork to your local machine.

---

### 2. Install Dependencies

> Even if Express is already listed in `package.json`, you still need to run this command after cloning. Forking/cloning does **not** copy the `node_modules` folder.

```bash
npm install
```
---

### 3. Edit `server.js`

Create a new route in `server.js`:

```js
app.get("/weather/:city", (req, res) => {
  // Your code here to return weather info for the given city
});
```

- Use `req.params.city` to get the city name from the URL.
- For this activity, you can return a simple JSON object like:

```json
{
  "city": "London",
  "temperature": "20°C"
}
```
---

### 4. Test Your API in Postman

- Open Postman (or another API testing tool).
- Send a GET request to:

```
http://localhost:3000/weather/London
```

- Make sure your server responds with the JSON object for the city you requested.

---

### 5. Experiment!

- Try different city names in the URL.
- Update your response JSON to include more details if you like.

---

## Tips

- Start your server before testing:

```bash
node server.js
```

- Keep your `index.html` and `script.js` as they are — no changes needed there.
- Read the instructions carefully and try to complete it on your own. This is your chance to practice working with APIs!