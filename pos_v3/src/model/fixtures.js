function loadAllItems() {
    return [
        new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'),
        new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'),
        new Item('ITEM000001', '雪碧', '瓶', 3.00, ''),
        new Item('ITEM000007', '果粒橙', '瓶', 3.50, ''),
        new Item('ITEM000002', '云山苹果', '斤', 5.50, '云山'),
        new Item('ITEM000003', '云山荔枝', '斤', 15.00, '云山'),
        new Item('ITEM000004', '电池', '个', 2.00, ''),
        new Item('ITEM000005', '康师傅方便面', '袋', 4.50, '康师傅'),
        new Item('ITEM000008', '康师傅冰红茶', '瓶', 3.00, '康师傅'),
        new Item('ITEM000006', '羽毛球', '个', 1.00, '')
    ];
}

function loadDiscount(){
    return {
        discount:[
            {
                type: 'brand discount',
                name: "可口可乐品牌打折",
                discount_rate: 0.9,
                barcode: [
                    'ITEM000000',
                    'ITEM000010'
                ]
            },
            {
                type: 'single produce discount',
                name:"单品打折",
                discount_rate: 0.95,
                barcode: [
                    'ITEM000000',
                    'ITEM000001'
                ]
            },
            {
                type: 'all produce discount',
                name:"全场打折",
                discount_rate: 0.9,
                barcode: [
                    'ITEM000000',
                    'ITEM000001'
                ]
            }
        ],
        fullreduce:[
            {
                type: 'single produce fullreduce',
                name: '满100减5',
                discount_rate:{
                    top:100,
                    reduce:5
                },
                barcode: [
                    'ITEM000000',
                    'ITEM000001'
                ]
            },
            {
                type: 'brand produce fullreduce',
                name: '满100减2',
                discount_rate:{
                    top:100,
                    reduce:2
                },
                barcode: [
                    'ITEM000005',
                    'ITEM000008'
                ]
            },
            {
                type: 'all produce fullreduce',
                name: '满100减3',
                discount_rate:{
                    top:100,
                    reduce:3
                },
                barcode: []
            }
        ]
    }
}

function loadPromotions() {
    return [
        {
            type: 'brand discount',
            name: "可口可乐品牌打折",
            discount_rate: '10%',
            barcode: [
                'ITEM000000',
                'ITEM000010'
            ]
        },
        {
            type: 'single produce discount',
            name:"单品打折",
            discount_rate: '5%',
            barcode: [
                'ITEM000000',
                'ITEM000001'
            ]
        },
        {
            type: 'full reduction',
            name: '满100减5',
            discount_rate:"full one hundred reduce five",
            barcode: [
                'ITEM000000',
                'ITEM000001'
            ]
        },
        {
            type: 'full reduction',
            name: '满100减2',
            discount_rate:"full one hundred reduce two",
            barcode: [
                'ITEM000005',
                'ITEM000008'
            ]
        },
        {
            type: 'full reduction',
            name: '满100减3',
            discount_rate:"full one hundred reduce three",
            barcode: []
        }
    ]
}
