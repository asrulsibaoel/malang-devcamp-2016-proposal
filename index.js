var markdownpdf = require("markdown-pdf")

var MarkdownFile = ["source.md"]
  , ProposalPath = "Proposal-Draft.pdf"

markdownpdf({
    cssPath: 'style.css',
    paperOrientation: 'landscape'
})
.concat
.from(MarkdownFile)
.to(ProposalPath, function () {
    console.log("Created", ProposalPath)
})