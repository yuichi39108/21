# スマホ対応
## PCとスマートフォンの違い
1. 操作が異なる
クリック→タップ
スクロール→スワイプ
2. 縦横比が異なる
pc:横長
スマホ:縦長
3. 画面の横幅が全く違う
spの一般的な横幅: 320~768px
タブレット: 640~1920px
pc: 1024~1920px
640px以下をspとして認識してレイアウトの作成
* 640px前後が基準(目安)となる

```css
@media screen and (max-width: 640px){

}
```

* スマホの縦横判定もある。
サイズ かつ 縦横判定 でメディアクエリを記述する

```css
@media only screen and (max-device-width:480px) and (orientation:landscape) {
/* style */
}
```
```css
@media only screen and (min-device-width:320px) and (orientation:portrait) {
/* style */
}
```  
