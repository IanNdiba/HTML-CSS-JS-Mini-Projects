// import parse from "html-react-parser";

//react-quill

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image", "video", "formula"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

const quill = new Quill("#editor", {
  modules: {
    toolbar: toolbarOptions,
  },
  placeholder: "Compose an epic...",
  theme: "snow", // or 'bubble'
});

//DISPLAYING THE DATA
quill.on(Quill.events.TEXT_CHANGE, update);
const dataContent = document.querySelector("#content");
update();

function update(delta) {
  const contents = quill.getContents();
  const htmlContents = quill.getSemanticHTML();
  let html = `<h3>contents</h3>${formatDelta(contents)}`;
  if (delta) {
    html = `${html}<h3>change</h3>${formatDelta(delta)}`;
  }

  dataContent.innerHTML = html;
}

function formatDelta(delta) {
  return `<div>${JSON.stringify(delta.ops, null, 2)}</div>`;
}
