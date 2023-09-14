'''
<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
	<img class="img-thumbnail" src="images/gallery/black-amber.jpg" alt="black-amber" title="Black amber">
	<p class="rounded">Black amber</p>
</div>
'''

def beolvas(nevek):
    fr = open("nevek.txt", "r", encoding = "utf-8")
    sor = fr.readline().strip()
    while (sor != ""):
        nevek.append(sor)
        sor = fr.readline().strip()
    fr.close()

# black-amber.jpg => <div>...</div>
# fajlNev: black-amber.jpg
# kepNev: black-amber
# cim: Black amber
def general(fajlNev):
    kepNev = fajlNev.split(".")[0]
    cim = kepNev.replace("-", " ").capitalize()

    img = f'<img class="img-thumbnail" src="images/gallery/{fajlNev}" alt="{kepNev}" title="{cim}">'
    p = f'<p class="rounded">{cim}</p>'
    elem = f'<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">{img}{p}</div>'

    return elem

def kiir(nevek):
    fw = open("elemek.txt", "w", encoding="utf-8")
    for nev in nevek:
        elem = general(nev)
        fw.write(elem + "\n")
    fw.close()

def main():
    nevek = []
    beolvas(nevek)
    kiir(nevek)

main()