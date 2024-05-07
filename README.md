# Reproduction

1. Have an editor with only the folowing plugins:
[
		Essentials,
		ImageBlock,
		Paragraph,
		Undo
]

2. Paste html looking like:
```<img><br><img>```
or
```<img>CK<img>```

Expected:
HTML gets pasted
Actual:
insertcontent-invalid-insertion-position error in the console, comming from here :
https://github.com/ckeditor/ckeditor5/blob/04a8c63bdad639792727275a0e30832869c7067f/packages/ckeditor5-engine/src/model/utils/insertcontent.ts#L362
 
# To run reproduction
1. npm i
1. npm run build
1. host sample/index.html with something like live server
