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

function loadPromotions() {
    return [
        {
            type: 'brand discount',
            name: cole,
            dicount_rate: '10%',
            barcodes: [
                'ITEM000000',
                'ITEM000010'
            ]
        },
        {
            type: 'single produce discount',
            discount_rate: '5%',
            barcode: [
                'ITEM000000',
                'ITEM000001'
            ]
        },
        {
            type: 'full reduction',
            single_produce: {
                barcode: [
                    'ITEM000002',
                    'ITEM000003'
                ]
            },
            brand_produce: {
                barcode: [
                    'ITEM000005',
                    'ITEM000008'
                ]
            },
            all_produce: {},
            produce_object: [
                {
                    name: single_produce,
                    barcode: [
                        'ITEM000000',
                        'ITEM000001'
                    ]
                },
                {
                    name: brand_produce,
                    barcode:[
                        'ITEM000005',
                        'ITEM000008'
                    ]
                },
                {
                    name: all_produce,
                    barocde:[]
                }
            ]
        }
    ]
}
