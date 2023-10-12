var loadPdata = [
    {
        name: 'Uppada Saree',
        price: 25000,
        discountPercent: 10,
        sellerName: 'Indian Traditions',
        image: '"E:\UICourse naresh\7AM Batch assignments\Project\images\product1.jpg"'
    },
    {
        name: 'Uppada Saree',
        price: 25000,
        discountPercent: 10,
        sellerName: 'Indian Traditions',
        image: '"E:\UICourse naresh\7AM Batch assignments\Project\images\product2.jpg"'
    },
    {
        name: 'Uppada Saree',
        price: 25000,
        discountPercent: 10,
        sellerName: 'Indian Traditions',
        image: '"E:\UICourse naresh\7AM Batch assignments\Project\images\product3.jpg"'
    },
    {
        name: 'Uppada Saree',
        price: 25000,
        discountPercent: 10,
        sellerName: 'Indian Traditions',
        image: '"E:\UICourse naresh\7AM Batch assignments\Project\images\product4.jpg"'
    },
    {
            name: 'Uppada Saree',
            price: 25000,
            discountPercent: 10,
            sellerName: 'Indian Traditions',
            image: '"E:\UICourse naresh\7AM Batch assignments\Project\images\product5.jpg"'
    },
    {
        name: 'Uppada Saree',
        price: 25000,
        discountPercent: 10,
        sellerName: 'Indian Traditions',
        image: '"E:\UICourse naresh\7AM Batch assignments\Project\images\product6.jpg"'
    },
    {
        name: 'Uppada Saree',
        price: 25000,
        discountPercent: 10,
        sellerName: 'Indian Traditions',
        image: '"E:\UICourse naresh\7AM Batch assignments\Project\images\product7.jpg"'
    },
    {
        name: 'Uppada Saree',
        price: 25000,
        discountPercent: 10,
        sellerName: 'Indian Traditions',
        image: '"E:\UICourse naresh\7AM Batch assignments\Project\images\product8.jpg"'
    },
    {
        name: 'Uppada Saree',
        price: 25000,
        discountPercent: 10,
        sellerName: 'Indian Traditions',
        image: '"E:\UICourse naresh\7AM Batch assignments\Project\images\product9.jpg"'
    },


];

var renderpdata = (prodDetails) => {
    var mainLI = $("<li/>");
    var ulTag = $("<ul></ul>");
    ulTag.addClass('');
    var li1 = $("<li/>").html('Product Name: ' + pData.name);
    ulTag.append(li1);

    var li2 = $("<li/>").html('Price: $' + pData.price);
    ulTag.append(li2);

    var li3 = $("<li/>").html('Manufacturer: ' + pData.manufacturer);
    ulTag.append(li3);
    
    var li4 = $("<li/>").html('Seller Name: ' + pData.sellerName);
    ulTag.append(li4);

    var li5 = $("<li/>");
    var imgTag = $("<img />").attr("src", pData.image);
    li5.append(imgTag);
    ulTag.append(li5);
    mainLi.append(ulTag);
    $(".container").append(mainLi);
}


