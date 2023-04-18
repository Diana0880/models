
var carModels = {
  "audi": ["Выберете модель", "A3", "A4", "A6"],
  "bmw": ["", "3 Series", "5 Series", "7 Series"],
  "mercedes": ["", "C-Class", "E-Class", "S-Class"]
};

$('#carBrandSelect').change(function(){
    var selectedBrand = $(this).val();
    var availableModels = carModels[selectedBrand];
    updateCarModelSelect(availableModels);
});

function updateCarModelSelect(availableModels) {
    var carModelDropdown = $('#carModelSelect');
    carModelDropdown.empty();
    $.each(availableModels, function(index, model){
        carModelDropdown.append('<option value="'+model+'">'+model+'</option>');
    });
}
