
function mouseMove(argEnv) {
    // ===================================================
    //  ○ マウス移動時の列の色付け ○
    //
    //  行とセルの色付けはCSSで実現しています
    // ====================================================

    // --- クリックされたエレメントを取得 ------------
    var wElement = (argEnv.srcElement || argEnv.target);

    // --- TDがクリックされたときのみ対象とする ------
    if (wElement.tagName.toUpperCase() == 'TD') {

        // --- クリックされたTDの位置を取得 ----------
        var wTDindex = wElement.cellIndex;

        // --- TRオブジェクトを取得 ------------------
        var wTABLE = wElement.parentNode.parentNode.parentNode;
        var wTR = wTABLE.rows;

        // --- TRを上から順に繰り返す ----------------
        for (var i = 0; i < wTR.length; i++) {

            // --- TR内のTDを左から順に繰り返す ------
            for (var j = 0; j < wTR[i].cells.length; j++) {

                // --- TDオブジェクトを取得 ----------
                var wTD = wTR[i].cells[j];

                // --- TRなどは除外して色付け --------
                if (wTD.tagName.toUpperCase() == 'TD') {

                    // --- 現在の選択列のみ色付け ----
                    var wBg = '';
                    if (j == wTDindex) { wBg = '#add8e6'; }

                    wTD.style.backgroundColor = wBg;
                }
            }
        }
    }
}
function mouseOut(argEnv) {
    // ===================================================
    //  ○ TABLEからマウスが外れたときの色消し ○
    //
    //  コメントは「mouseMove」を参考にしてください
    // ====================================================

    var wElement = (argEnv.srcElement || argEnv.target);
    var wTABLE = wElement.parentNode.parentNode.parentNode;
    var wTR = wTABLE.rows;

    if (wTR === undefined) { return; }

    for (var i = 0; i < wTR.length; i++) {
        for (var j = 0; j < wTR[i].cells.length; j++) {
            var wTD = wTR[i].cells[j];
            if (wTD.tagName.toUpperCase() == 'TD') {
                wTD.style.backgroundColor = '';
            }
        }
    }
}

