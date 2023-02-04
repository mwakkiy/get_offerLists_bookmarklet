# get_offerLists_bookmarklet

Opensea のオファー者一覧を取得するブックマークレット

## 事前設定

ブックマークを新規作成し編集  
↓  
URL を下記に変更

```
avascript: void (import('https://mwakkiy.github.io/get_offerLists_bookmarklet/offer.js').then(m => m.getOffer()));
```

## 使い方

Opensea の該当コレクション → アクティビティ → 　オファー  
のページを表示する。  
https://opensea.io/ja/collection/ninjaanimals2nd/activity?search[eventTypes][0]=OFFER_ENTERED

先ほど設定したブックマークをクリック。
