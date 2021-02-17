const withPlugins = require('next-compose-plugins');
const withReactSvg = require('next-react-svg')
const path = require('path')
 
module.exports = withPlugins([[ withReactSvg,{
  include: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config) {
    return config
  }
}]], {
  async rewrites() {
    return [
      {
        source: '/api/yelp',
        destination: 'https://api.yelp.com/v3/graphql'
      }
    ];
  },
  images: {
    domains: ['s3-media1.fl.yelpcdn.com','s3-media2.fl.yelpcdn.com', 's3-media3.fl.yelpcdn.com', 's3-media4.fl.yelpcdn.com']
  }
})