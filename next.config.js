module.exports = {
    async rewrites(){
        return [
            {
                source: '/api/yelp',
                destination: 'https://api.yelp.com/v3/graphql'
            }
        ]
    }
}