
const GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';

const onBtnClick = function (t, opts) {    
    const context = t.getContext();
    // console.log(JSON.stringify(context, null, 2));

    t.get('card', 'shared', 'isClicked').then(function(data) {
        console.log('card clicked callback, properties of isClicked: ', JSON.stringify(data, null, 2));
    });

    
    // return {'card-back-section': function(cbs, options){
    //     return {
    //     title: 'My Card Back Section',
    //     icon: GRAY_ICON, // Must be a gray icon, colored icons not allowed.
    //     content: {
    //         type: 'iframe',
    //         url: cbs.signUrl('../html/section.html'),
    //         height: 230, // Max height is 1500.
    //         action: {
    //             text: 'My Action',
    //             // callback: (t) => t.popup(),
    //         },
    //     }
    //     };
    // }}
      
    // return t.card('id', 'name').then(function (card) {
    //     console.log('click event, card');
    //     console.log(JSON.stringify(card, null, 2));
    // });
  };

  window.TrelloPowerUp.initialize({
    'card-buttons': function (t, opts) {
        const context = t.getContext();
        // console.log(JSON.stringify(context, null, 2));

        const myKeyValueObject = {
            'isClicked': 'you bectcha!',
          };
        t.set('card', 'shared', myKeyValueObject);


        return [{
            icon: GRAY_ICON,
            text: 'Add challenge--',
            callback: onBtnClick,
            condition: 'edit'
        }, {
            icon: GRAY_ICON,
            text: 'Just a URL',
            condition: 'always',
            url: 'https://www.the-public-good.com/',
            target: 'The Public Good'
        }];
        },
  
    "card-badges": function (t, opts) {    
        return t
            .card('id', 'name')            
            .then(function (card) {
            return [
                {
                text: "Challenge",
                color: "red"
                },
                {
                text: "Celebrate",
                color: "green"
                },
            ];
            });
        },
    'card-back-section': function(cbs, options){
        return {
        title: 'My Card Back Section',
        icon: GRAY_ICON, // Must be a gray icon, colored icons not allowed.
        content: {
            type: 'iframe',
            url: cbs.signUrl('/src/html/section.html', { anArg: 'hey' }),
            height: 230, // Max height is 1500.
            action: {
                text: 'My Action',
                callback: (t) => t.popup(),
            },
        }
        };
    }
          
  });