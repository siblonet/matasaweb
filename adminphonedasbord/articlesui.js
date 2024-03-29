let ActiveDasa;
let ActiveCoa;
let ActiveCla;
let ActiveAra;
let ActiveAna;
let adminiSpacea;



function ArticlesUI(ActiveDas, ActiveCo, ActiveCl, ActiveAr, ActiveAn, adminiSpace) {

    ArticleFromPhoneSearch = [];
    ActiveDasa = ActiveDas;
    ActiveCoa = ActiveCo;
    ActiveCla = ActiveCl;
    ActiveAra = ActiveAr;
    ActiveAna = ActiveAn;
    adminiSpacea = adminiSpace;

    ActiveDas.classList.remove('active');
    ActiveCo.classList.remove('active');
    ActiveCl.classList.remove('active');
    ActiveAr.classList.add('active');
    ActiveAn.classList.remove('active');
    document.getElementById('filter-order').classList.remove('active');

    const livecha = document.getElementById('add-article');

    setTimeout(() => {
        livecha.classList.add('active');
    }, 1000);

    GetArticle("avail").then((offarticles) => {


        const articlesHTML = `
                <br>
                <br>
                <br>
                <br>

        ${offarticles.map(article => {
            return `
            <div class="articlerow">
      
                <div class="articlerwedgea">
      
                    <div class="articlesInfosa">
                       
                            <div class="imageholder">
                                <img src="${article.image[0] ? article.image[0].ima : ''}" alt="image1">
                            </div>
                           
                            <div class="">
                                <p class="sta shipp"  style="cursor: pointer" data-toggle="modal" data-target="#modArticle" onclick="openArticleforediting('${article._id}')">Ouvrir</p>
                                <div style="height: 5px"></div>
                                <p  class="sta" style="padding-left: ${article.quantity > 0 ? '10px' : '30px'}; padding-right: ${article.quantity > 0 ? '10px' : '30px'}; font-size: 14px; background-color: ${article.quantity > 0 ? "#054846" : "rgba(255, 0, 89, 0.341)"}; font-weight: bold; color: ${article.quantity > 0 ? "#ffffff" : "red"}">${article.quantity > 0 ? "Disponible" : "Finis"}</p>
                                <div style="height: 7px"></div>
                            </div>
                    </div>
      
                    <hr>

                    
                    <div class="orderinfoso">
                        <div style="background-color: #ffffff;">
                            <p style="max-height: 50px; overflow: hidden;"><strong>${article.addarticle}</strong></p>
                        </div>
      
                        <span style="width: 10px;"></span>
                        <div style="background-color: #ffffff;">
                            <p style="max-height: 50px; overflow: hidden;">Qté: <strong>${article.quantity}</strong></p>
                        </div>
      
      
                        <span style="width: 10px;"></span>
                        <div style="background-color: #ffffff;">
                            <p style="max-height: 50px; overflow: hidden;">Prix: <strong>${(article.addprix / 1000).toFixed(3)}</strong> F</p>
                        </div>
    
                    </div>
                </div>
            </div>
            <br>
            <br>
      
            `;
        }).join('')}

        `;



        adminiSpace.innerHTML = articlesHTML;
        document.getElementById('searcha').style.display = "block";

    }).catch((error) => console.log(error))


}

const inputElement = document.getElementById("form1");

// Add an event listener for the input event
inputElement.addEventListener("input", function () {


    ArticlesUISearch(inputElement.value)
});



function CreateArticle() {
    try {
        const addarticle = document.getElementById('addarticle').value;
        const addquant = document.getElementById('addquant').value;
        const addgenre = document.getElementById('addgenre').value;
        const addprix = document.getElementById('addprix').value;
        const addreduction = document.getElementById('addreduction').value;
        const addoccasion = document.getElementById('addoccasion').value;
        const addbarcode = document.getElementById('addbarcode').value;

        const addcoul = document.getElementById('addcoul').value;
        const addmarque = document.getElementById('addmarque').value;
        const notes = document.getElementById('notes').value;


        if (addarticle && addgenre && addbarcode && addprix && addmarque && Onlineimas.length > 0) {
            const product = {
                id_has: Math.floor(Math.random() * 100000000).toString(),
                addarticle: addarticle,
                quantity: parseInt(addquant),
                addgenre: addgenre,
                addprix: parseInt(addprix),
                addreduction: parseInt(addreduction),
                addoccasion: addoccasion,
                addcoul: addcoul ? addcoul : "#000000,#000000,#000000,#000000",
                addmarque: addmarque,
                notes: notes,
                barcode: addbarcode,
                owner: "matasa",
                image: Onlineimas
            };
            document.getElementById("ajouteencou").innerText = "En cours"

            const createItem = async () => {
                try {
                    const createdProdec = await requesttoBackend('POST', 'boutique', product);
                    if (createdProdec) {
                        const items = await requesttoBackend('GET', 'boutique/only/article/matasa');
                        await deleteArticle();
                        await PostArticle(items);
                    }

                } catch (error) {
                    console.error('Error creating product:', error.message);
                }
            };

            createItem();
            document.getElementById("ajouteencou").innerText = "Ajouter Encore"

        }
    } catch (error) {
        console.log(error)
    }
}

async function AddArticleImage() {
    const imagePreview = document.getElementById(`imagePreviewHere`);
    imagePreview.src = '';

    const fileInput = document.getElementById(`doblik11`);
    const file = fileInput.files[0];

    if (!file) {
        alert("Aucune image n'a été selectionné!");
        return;
    }

    const reader = new FileReader();
    reader.onload = async function (event) {
        const base64Data = event.target.result.split(',')[1];
        const url = await requesttoBackend('POST', 'boutique/uploadImage', { ima: base64Data, nam: file.name });
        const imarandomid = Math.floor(Math.random() * 100000000).toString()
        Onlineimas.push({ ima: url.ima, has_aidii: imarandomid });

        const img = document.getElementById('imagePreviewHere');
        img.src = url.ima;

    };
    reader.readAsDataURL(file);
    document.getElementById('limitimag1').style.display = "none";

}


function removeImageCreate() {
    var result = window.confirm("Voulez vous vraiment le retirer?");
    const imagePreview = document.getElementById(`imagePreviewHere`);
    imagePreview.src = '';

    if (result) {
        Onlineimas.length = 0;
        document.getElementById('limitimag1').style.display = "flex";
    }

}


async function openArticleforediting(id_has) {


    const Editeimageonline1 = document.getElementById('Editeimageonline1');

    const styels = `
    align-items: center; 
    justify-content: center; 
    text-align: center; 
    cursor: pointer; 
    height: 25px; 
    width: 100px;
    padding-right: 0; 
    padding-left: 0; 
    border-radius: 7px; 
    background-color: #aaaaaa;
    overflow: hidden;
`;

    Editeimageonline1.style = styels;


    Onlineimas.length = 0;

    GetArticleByID(id_has).then(product => {
        Onlineimas.push(product.image[0]);

        document.getElementById('ediatiid').value = id_has;
        document.getElementById('editearticle').value = product.addarticle;
        document.getElementById('editequant').value = parseInt(product.quantity);
        document.getElementById('editegenre').value = product.addgenre;
        document.getElementById('editereduction').value = product.addreduction;
        document.getElementById('editeprix').value = product.addprix;
        document.getElementById('editeoccasion').value = product.addoccasion;
        document.getElementById('editecoul').value = product.addcoul;
        document.getElementById('editemarque').value = product.addmarque;
        document.getElementById('editebarcode').value = product.barcode;
        document.getElementById('editenotes').value = product.notes;


        const imagePreview1 = document.getElementById(`Editeimage1`);
        imagePreview1.src = Onlineimas[0].ima;
        document.getElementById('editeimageid1').value = Onlineimas[0]._id;

        document.getElementById('limitimage1').style.display = "none";

    });

};



function removeImageEdite() {
    var result = window.confirm("Voulez vous vraiment le retirer?");

    if (result) {
        const imagePreview = document.getElementById(`Editeimage1`);
        imagePreview.src = '../admin/assets/img/imgo.png';
        Onlineimas[0].ima = "../admin/assets/img/imgo.png";

        document.getElementById('limitimage1').style.display = "flex";
    }


}

async function EditeArticleImage() {
    const imagePreview = document.getElementById(`Editeimage1`);
    imagePreview.src = 'gghgh.jpg';


    const fileInput = document.getElementById(`Editeimageonline1inpu`);
    const file = fileInput.files[0];

    if (!file) {
        alert("Aucune image n'a été selectionné!");
        return;
    };


    const reader = new FileReader();
    reader.onload = async function (event) {
        const base64Data = event.target.result.split(',')[1];

        const response = await fetch(apiUrlfine + "boutique/uploadImage", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ima: base64Data, nam: file.name }),
        });

        if (response.ok) {
            const url = await response.json();
            Onlineimas[0].ima = url.ima;
            setTimeout(() => {
                imagePreview.src = url.ima;
            }, 2500);
        } else {
            console.log("gegegeg")
        }


    };
    reader.readAsDataURL(file);
    if (Onlineimas.length > 0) {
        document.getElementById('limitimage1').style.display = "none";
    }
};


function ClearArticleinfos(caller) {
    if (caller == "addarticles") {
        document.getElementById('autocliaddcheck').value = "off";
        initDataLoader();
        Onlineimas.length = 0;
    } else {
        Onlineimas.length = 0;
    }
}


async function EditeArticle() {
    const _id = document.getElementById('ediatiid').value;
    try {
        const addarticle = document.getElementById('editearticle').value;
        const addquant = parseInt(document.getElementById('editequant').value);
        const addgenre = document.getElementById('editegenre').value;
        const addprix = document.getElementById('editeprix').value;
        const addreduction = document.getElementById('editereduction').value;
        const addoccasion = document.getElementById('editeoccasion').value;
        const addcoul = document.getElementById('editecoul').value;
        const addmarque = document.getElementById('editemarque').value;
        const addbarcode = document.getElementById('editebarcode').value;
        const notes = document.getElementById('editenotes').value;


        if (addarticle && addgenre && addbarcode && addprix && addcoul && addmarque) {
            const product = {
                id_has: _id,
                addarticle: addarticle,
                quantity: parseInt(addquant),
                addgenre: addgenre,
                addprix: parseInt(addprix),
                addreduction: parseInt(addreduction),
                addoccasion: addoccasion,
                addcoul: addcoul,
                addmarque: addmarque,
                notes: notes,
                owner: "matasa",
                barcode: addbarcode,
                image: Onlineimas

            };

            const createItem = async () => {
                try {
                    await requesttoBackend('PUT', `boutique/${_id}`, product);
                    initDataLoader();

                } catch (error) {
                    console.error('Error updating product:', error.message);
                }
            };

            createItem();


        }
    } catch (error) {
        console.log(error)
    }
};


async function RemoveArticleById() {
    var result = window.confirm("Voulez vous vraiment supprimer?");

    if (result) {
        const _ide = document.getElementById("ediatiid").value;
        await requesttoBackend('DELETE', `boutique/${_ide}`);
        Onlineimas.length = 0;
        initDataLoader();
    }

};
