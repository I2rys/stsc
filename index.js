"use strict";

// Variables
const args = process.argv.slice(2)

// Main
if(!args.length) return console.log("usage: node index.js <string>")

const hexPairs = []

var result = Buffer.from(args.join(" ")).toString("hex")

for( let i = 0; i < result.length; i += 2 ) hexPairs.push(result.slice(i, i + 2))

result = hexPairs.map(c => `\\x${c}`).join('')

console.log("Result:", result)