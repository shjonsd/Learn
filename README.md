# Klappir Learn

## Upload documents
### Using github
Remember to save files from your computer using **md** or **mdx**

1. Open folder **Documents**
2. Add file
3. Upload files
4. *Optional: You can create documents inside github using markdown*

### Routes inside files
All files need a route saved on top of your file:

```
---
name: Hello world
route: /docs
menu: EnviroMaster
---

# Hello, I'm a mdx file!

"Documentation is a love letter that you write to your future self."
```

### Update menu
In route of the Learn page there is a file called:

**doczrc.js**

There you can design the menu you want from the routes you have created inside your files.

`
menu: [{ name: "Klappir Learn" }, {name: "Klappir Platform"}, {name: "EnviroMaster"},],
`

### Save images inside AWS S3

[Link to AWS S3 image storage](https://s3.console.aws.amazon.com/s3/buckets/klappir-static/img/learn/?region=us-east-1)

### Using images in markdown
`![alt text](https://klappir-static.s3.amazonaws.com/img/learn/EnviroMasterDashboard.png)
`
### S3 amazon steps

1. Open folder **klappir-static**
2. Open folder **img**
3. Open folder **learn**
4. Press **Upload** button
5. Upload image or video
6. *Optional: Sort by last modified*
7. Find the new uploaded image or video
8. Copy Object URL and you are ready to use

## Markdown Cheatsheet
[Linkt to markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Markdown clients
### For pros (mac)
[Macdown](https://macdown.uranusjr.com/)
### For semi pros (windows)
[Typora](https://www.typora.io/)
### Online 
[Dillinger](https://dillinger.io/)


