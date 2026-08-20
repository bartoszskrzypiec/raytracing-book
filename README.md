# Ray Tracing dla Artystów Technicznych

Książka HTML o ray tracingu, napisana z myślą o artystach technicznych — nie o
programistach piszących renderer od zera, tylko o osobach, które chcą rozumieć,
co się dzieje pod maską silnika renderującego, którego już używają.

22 rozdziały główne prowadzą od podstaw (wektory, przecięcia, kamera) przez
shading, realizm obrazu, wydajność i globalne oświetlenie, aż po zastosowania
praktyczne (wolumetria, włosy, atmosfera). Dodatki A–Z rozwijają wybrane tematy
znacznie głębiej niż pozwala na to rozdział główny — pełne wyprowadzenia,
policzone numerycznie przykłady, dowody. Osobny pomocnik obliczeniowy prowadzi
krok po kroku przez zadania z pierwszych rozdziałów.

**Wersja live:** https://bartoszskrzypiec.github.io/raytracing-book/
*(jeśli link nie działa, GitHub Pages nie jest jeszcze włączone dla tego repo —
Settings → Pages → Deploy from a branch → `main` / `/ (root)`)*

## Jak to działa

To są czyste, statyczne pliki HTML z inline'owanym SVG i wspólnym arkuszem
stylów w `assets/style.css`. Zero zależności, zero build stepu, zero npm —
otwierasz plik w przeglądarce (lub całość na GitHub Pages) i działa. Dokładnie
dlatego dobrze się to czyta też na telefonie.

```
index.html              — spis treści
rozdzialy/               — rozdziały główne 1–22
dodatki/                 — dodatki A–Z, każdy rozwija konkretny rozdział lub temat
pomocnik/                — pomocnik obliczeniowy z zadaniami
assets/style.css         — wspólny dark theme dla wszystkich stron
```

## Status projektu

To jest żywy projekt, nie jednorazowa publikacja. Regularnie wracamy do
poszczególnych rozdziałów i dodatków, sprawdzamy czy temat jest wyczerpany, i
rozwijamy albo przepisujemy te, które okazują się zbyt płytkie. Treść nie jest
"zamrożona" po pierwszej wersji — jeśli otwierasz jakiś rozdział po raz drugi,
może wyglądać inaczej niż wcześniej.
