// MOBIL ACCORDION

const toggleInputs =
document.getElementById("toggleInputs");

const toggleResults =
document.getElementById("toggleResults");

const inputsWrapper =
document.getElementById("inputsWrapper");

const resultsWrapper =
document.getElementById("resultsWrapper");

if(window.innerWidth <= 720){

    if(inputsWrapper){
        inputsWrapper.style.display = "none";
    }

}

if(toggleInputs){

    toggleInputs.addEventListener("click",()=>{

        if(
            inputsWrapper.style.display === "none"
        ){
            inputsWrapper.style.display = "block";
        }else{
            inputsWrapper.style.display = "none";
        }

    });

}

if(toggleResults){

    toggleResults.addEventListener("click",()=>{

        if(
            resultsWrapper.style.display === "none"
        ){
            resultsWrapper.style.display = "block";
        }else{
            resultsWrapper.style.display = "none";
        }

    });

}


// TON SECIMI

const toneButtons =
document.querySelectorAll(".choice-card");

toneButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        toneButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});


// UZUNLUK SECIMI

const lengthButtons =
document.querySelectorAll(".length-btn");

lengthButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        lengthButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});


// TOAST

const toast =
document.getElementById("toast");

function showToast(message){

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2000);

}


// KOPYALA

const copyButtons =
document.querySelectorAll(".copy-btn");

copyButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const targetId =
        button.dataset.copy;

        const target =
        document.getElementById(targetId);

        if(!target) return;

        navigator.clipboard.writeText(
            target.innerText
        );

        showToast(
            "✓ Panoya kopyalandı"
        );

    });

});


// GENERATE TEST

// ACIKLAMA HAVUZLARI

const starters = [
"Modern tasarımıyla dikkat çeken",
"Profesyonel kullanım için geliştirilen",
"Yüksek kalite standartlarında üretilen",
"Dayanıklı yapısıyla öne çıkan",
"Şık görünümü ve fonksiyonelliği bir araya getiren",
"İşletmeler için özel olarak tasarlanan",
"Profesyonel çözümler sunan",
"Estetik detaylarıyla fark yaratan"
];

const middles = [
"işletmelere değer katmaktadır",
"uzun ömürlü kullanım sunmaktadır",
"profesyonel kullanım için ideal bir çözümdür",
"verimli kullanım avantajı sağlamaktadır",
"yüksek performans beklentilerini karşılamaktadır",
"modern çalışma alanlarına uyum sağlamaktadır",
"güvenilir kullanım deneyimi sunmaktadır"
];

const endings = [
"Kalite ve şıklığı bir araya getirir.",
"İşletmelerin tercih ettiği çözümler arasında yer alır.",
"Profesyonel kullanıcıların beklentilerini karşılar.",
"Fonksiyonellik ve estetiği bir arada sunar.",
"Uzun yıllar güvenle kullanılabilir.",
"Profesyonel projeler için ideal bir tercihtir."
];


// RANDOM SEC

function randomItem(array){

    return array[
        Math.floor(
            Math.random() * array.length
        )
    ];

}


// ACIKLAMA URET

function generateDescription(product, tone, length){

let starter = "";
let middle = "";
let ending = "";

switch(tone){

case "premium":

starter = randomItem([
"Şık tasarımıyla öne çıkan",
"Premium detaylarla geliştirilen",
"Estetik görünümüyle dikkat çeken",
"Modern çizgilere sahip"
]);

middle = randomItem([
`${product} işletmelere prestij kazandırır`,
`${product} profesyonel alanlara değer katar`,
`${product} estetik ve fonksiyonelliği bir araya getirir`
]);

ending = randomItem([
"Kalite ve şıklığı aynı noktada buluşturur.",
"Profesyonel kullanıcılar için ideal tercihler arasındadır.",
"Modern işletmelerin beklentilerini karşılar."
]);

break;

case "seo":

starter = randomItem([
"En çok tercih edilen",
"Profesyonel kullanım için geliştirilen",
"Kaliteli ve dayanıklı"
]);

middle = randomItem([
`${product} modelleri yüksek performans sunar`,
`${product} fiyatları ve özellikleriyle dikkat çeker`,
`${product} çözümleri işletmelere avantaj sağlar`
]);

ending = randomItem([
"SEO odaklı içeriklerde sıkça tercih edilmektedir.",
"Arama motorlarında öne çıkan ürün grupları arasında yer alır.",
"Profesyonel çözümler sunmaktadır."
]);

break;

case "kurumsal":

starter = randomItem([
"Güvenilir kullanım sunan",
"Kurumsal ihtiyaçlara yönelik geliştirilen",
"Profesyonel beklentilere uygun"
]);

middle = randomItem([
`${product} işletmeler için verimli kullanım sağlar`,
`${product} uzun ömürlü kullanım avantajı sunar`,
`${product} yüksek kalite standartlarında üretilmiştir`
]);

ending = randomItem([
"Kurumsal projeler için uygun çözümler sunmaktadır.",
"Profesyonel kullanım ihtiyaçlarını karşılamaktadır.",
"İşletmelerin beklentilerine cevap vermektedir."
]);

break;

default:

starter = randomItem([
"Satış odaklı geliştirilen",
"İşletmelere avantaj sağlayan",
"Dikkat çeken özelliklere sahip"
]);

middle = randomItem([
`${product} kullanıcı memnuniyetini artırır`,
`${product} işletmeler için verimli çözümler sunar`,
`${product} profesyonel kullanım sağlar`
]);

ending = randomItem([
"Hemen tercih edilebilecek ürünler arasındadır.",
"Kalite ve performansı bir arada sunar.",
"İşletmeler için ideal çözümler üretir."
]);

}

let text =
`${starter} ${product}. ${middle}. ${ending}`;

if(length === "orta"){

text +=
` Dayanıklı yapısı sayesinde uzun süreli kullanım sunar ve profesyonel işletmeler tarafından tercih edilmektedir.`;

}

if(length === "uzun"){

text +=
` Dayanıklı yapısı sayesinde uzun süreli kullanım sunar ve profesyonel işletmeler tarafından tercih edilmektedir.

Üretim kalitesi, modern görünümü ve işlevselliği ile farklı kullanım alanlarında verimli sonuçlar sağlamaktadır.`;

}

return text;

}


function generateHashtags(product,count){

const p = product.toLowerCase();

let tags = [];

if(
p.includes("elbise") ||
p.includes("etek") ||
p.includes("ceket") ||
p.includes("gömlek")
){

tags = [
"#moda",
"#kadinelbise",
"#stil",
"#kombin",
"#fashion",
"#giyim",
"#trend",
"#outfit",
"#modatarzi",
"#shopping",
"#butik",
"#yenisezon",
"#style",
"#womensfashion",
"#fashionstyle"
];

}

else if(
p.includes("dolap") ||
p.includes("tezgah") ||
p.includes("mutfak")
){

tags = [
"#endustriyelmutfak",
"#pastadolabi",
"#tezgah",
"#mutfakekipmanlari",
"#profesyonelmutfak",
"#cafeekipmanlari",
"#restorankurulumu",
"#mutfakcozumleri",
"#paslanmaz",
"#pastareyonu",
"#ticariurunler",
"#mutfaksistemleri",
"#kalite",
"#profesyonelcozumler",
"#endustriyel"
];

}

else{

tags = [
"#seo",
"#marketing",
"#business",
"#socialmedia",
"#content",
"#promotion",
"#branding",
"#digitalmarketing",
"#sales",
"#growth",
"#strategy",
"#startup",
"#onlinebusiness",
"#ecommerce",
"#reklam"
];

}

return tags
.slice(0,count)
.join(" ");

}


function generateKeywords(
product,
sector,
count
){

const p =
product.toLowerCase();

let keywords = [];

if(
p.includes("elbise")
){

keywords = [
product,
product + " fiyatları",
product + " modelleri",
"kadın giyim",
"moda ürünleri",
"şık elbise",
"günlük elbise",
"özel gün elbisesi",
"trend elbise",
"kadın kombinleri",
"moda",
"stil",
"butik ürünleri",
"yeni sezon",
"kadın modası"
];

}

else if(
p.includes("dolap") ||
p.includes("tezgah")
){

keywords = [
product,
product + " fiyatları",
product + " modelleri",
"endüstriyel mutfak",
"profesyonel mutfak ekipmanları",
"paslanmaz tezgah",
"cafe ekipmanları",
"restoran ekipmanları",
"mutfak çözümleri",
"ticari mutfak",
"pastane ekipmanları",
"endüstriyel ürünler",
sector,
product + " özellikleri",
product + " satın al"
];

}

else{

keywords = [
product,
product + " fiyatları",
product + " modelleri",
product + " satın al",
product + " özellikleri",
product + " avantajları",
sector,
"profesyonel çözümler",
"kaliteli ürünler",
"işletme çözümleri",
"premium ürünler",
"ticari kullanım",
"uzun ömürlü kullanım",
"yüksek performans",
"modern tasarım"
];

}

return keywords
.slice(0,count)
.join(", ");

}


// GENERATE

const generateBtn =
document.getElementById("generateBtn");

generateBtn.addEventListener("click",()=>{

    const product =
    document.getElementById("productName").value.trim();

    const sector =
    document.getElementById("sector").value.trim();

    const hashtagCount =
    parseInt(
        document.getElementById("hashtagCount").value
    );

    const keywordCount =
    parseInt(
        document.getElementById("keywordCount").value
    );

    if(product === ""){

        showToast(
            "Ürün adı girmen gerekiyor"
        );

        return;
    }

const activeTone =
document.querySelector(".choice-card.active")
.dataset.tone;

const activeLength =
document.querySelector(".length-btn.active")
.dataset.length;

document.getElementById(
    "descriptionOne"
).innerText =
generateDescription(
    product,
    activeTone,
    activeLength
);

document.getElementById(
    "descriptionTwo"
).innerText =
generateDescription(
    product,
    activeTone,
    activeLength
);

    document.getElementById(
        "hashtagResult"
    ).innerText =
    generateHashtags(
        product,
        hashtagCount
    );

    document.getElementById(
        "keywordResult"
    ).innerText =
    generateKeywords(
        product,
        sector,
        keywordCount
    );

    if(window.innerWidth <= 720){

        resultsWrapper.style.display =
        "block";

    }

    showToast(
        "✨ İçerikler oluşturuldu"
    );

});