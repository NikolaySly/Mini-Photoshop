const grayscale = document.querySelector('#grayscale');   //объявляем переменные
const contrast = document.querySelector('#contrast');
const brightness = document.querySelector('#brightness');
const sepia = document.querySelector('#sepia');
const saturate = document.querySelector('#saturate');
const img = document.querySelector('#image');
const img2 = document.querySelector('#image2');
const reset = document.querySelector('#reset');
const imgUrl = document.querySelector('#img-url');
const none = document.querySelector('#app');
const settings = document.querySelector('.settings');


const defaults = {    //сохраняем изначальные позиции бегунков
	grayscale: 0,	
	contrast: 100,
	brightness: 100,
	sepia: 0,
	saturate: 100	
};

none.style.display = "none";   //скрываем html чать где будет храниться изначальный вид картинки

grayscale.addEventListener('input', updateFilterValue)    //регистрируем движение бегунков и цепляем функцию
contrast.addEventListener('input', updateFilterValue)
brightness.addEventListener('input', updateFilterValue)
sepia.addEventListener('input', updateFilterValue)
saturate.addEventListener('input', updateFilterValue)

reset.addEventListener('click', resetFilterValue)    //регистрируем нажатие кнопки и цепляем функцию

imgUrl.addEventListener('change', updateImageUrl)    //регистрируем изменение адресной строки и цепляем функцию

function updateFilterValue() {     
	reset.disabled = false;   //активация кнпки сброса и выставление фильтров на картинке согласно положению бегунков 
	img.style.filter = `      
	grayscale(${grayscale.value}%)	
	contrast(${contrast.value}%)
	brightness(${brightness.value}%)
	sepia(${sepia.value}%)
	saturate(${saturate.value}%)
	`
};

function resetFilterValue() {
	img.style.filter = '';     // обнуляем стили фильтров

	grayscale.value = defaults.grayscale    //возвращаем бегунки на исходные позиции
	contrast.value = defaults.contrast
	brightness.value = defaults.brightness
	sepia.value = defaults.sepia
	saturate.value = defaults.saturate

	reset.disabled = true;   //кнопка не активна
}

function updateImageUrl() {
	none.style.display = "flex";
	settings.style.display = "flex";
	let NewImgUrl = imgUrl.value;      //обьявляем новую перемеену адресной строки, которая берет значение с измененного инпута
	img.setAttribute('src', NewImgUrl) //прописываем в src картинки новый адрес котоый мы выше взяли из инпута
	img2.setAttribute('src', NewImgUrl)//прописываем  новый адрес в src дублирующей картинки
}
