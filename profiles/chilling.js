module.exports = () =>{
    return {
        assets: {
            small: {
                txt: 'Cold hearted', //The text you get when hovering your mouse over the small icon
                icon: 'ice' //The small icon in the bottom right
            }, large: {
                txt: 'Oh hey, some trees!', //The text that appears after hovering your mouse over the large icdon
                icon: 'trees' //The large icon for the rich presence
            }
        },
        details: 'Im just chillin\'', //The details of the rich presence
        state: 'Chillin\'', //The state of the rich presence
        name: 'chilling' //The name of the profile
    }
}
