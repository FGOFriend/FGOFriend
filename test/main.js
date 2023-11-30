(() => {
    const $ = document.querySelector.bind(document);
    const wheel = $('.wheel');
    const start = $('start');
    const listGift = [
        {
            txtName: '1',
            percent: 20/100
        },
        {
            txtName: '2',
            percent: 20/100
        },
        {
            txtName: '3',
            percent: 20/100
        },
        {
            txtName: '4',
            percent: 20/100
        },
        {
            txtName: '5',
            percent: 20/100
        },
    ]
    const size = listGift.length;
    const rotate =360/size;
    const skewY =90-rotate;

    const renderItem =()=>{
        listGift.forEach((item, index)=>{
            const itemGift = document.createElement('li');
        itemGift.style.transform=`
            rotate(${rotate * index}deg)
                skewY(-${skewY}deg)
        `;   
        
        itemGift.innerHTML =`
        <p class="text-item"
            style="transform:skewY(${skewY}deg)
            rotate(${rotate/2}deg)">
            <b>${item.txtName}</b>
        </p>
          `;
          
        })
    }
})()