const fs = require('fs').promises;
const filePath = './explosions.json';

const express = require("express");
const app = express()

// app.use('/explosions', (req, res) => {
    // res.json({ explosions: explosions})

    // fs.readFile(filePath, 'utf8', (err, data) {
    //     if (err) throw err;
    //     let explosionNum = JSON.parse(data);
    //     res.send(explosionNum)
    // })
// })
// app.put("/", (req, res) => {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) throw err;
//         let explosionNum = JSON.parse(data);
//         const updatedExplosionNum = explosionNum + 1
//         updatedExplosionNum = JSON.stringify(explosionNum)
//         fs.writeFile(filePath, json, 'utf8', (err, data) => {
//             if (err) throw err;

//         })
//     })
//     console.log("meow")
// })

app.listen(3000)


// const globalExplosionUpdate = async() => {
//     const filePath = '.explosions.json';
//     try{
//         const data = await fs.readFile(filePath, 'utf8')
//         console.log("current data: " + data);
//         const config = JSON.parse(data)

//         config.explosions += 1;

//         await fs.writeFile(filePath, JSON.stringify(config, null, 2), 'utf8');
//         console.log("success! :" + config.explosions)
//     } catch (err) {
//         console.error(err);
//     }
// }