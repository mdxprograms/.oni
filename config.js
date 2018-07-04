"use strict";
exports.__esModule = true;
exports.activate = function (oni) {
    console.log("config activated");
    // Input
    //
    // Add input bindings here:
    //
    oni.input.bind("<c-enter>", function () { return console.log("Control+Enter was pressed"); });
    //
    // Or remove the default bindings here by uncommenting the below line:
    //
    // oni.input.unbind("<c-p>")
};
exports.deactivate = function (oni) {
    console.log("config deactivated");
};
exports.configuration = {
    "autoUpdate.enabled": true,
    "experimental.indentLines.enabled": true,
    "learning.enabled": false,
    "oni.bookmarks": ["~/repos/projects"],
    "oni.hideMenu": true,
    "oni.plugins.prettier": {
        settings: {
            semi: true
        },
        formatOnSave: true,
        enabled: true
    },
    "editor.fontSize": "14px",
    "editor.fontFamily": "Hack",
    "editor.scrollBar.visible": false,
    "editor.quickInfo.delay": 200,
    // UI customizations
    "ui.colorscheme": "onedark",
    "ui.animations.enabled": true,
    "ui.fontSmoothing": "auto",
    "vim.setting.number": true,
    "vim.setting.tabstop": 2,
    "vim.setting.softtabstop": 2,
    "vim.setting.shiftwidth": 2
};
