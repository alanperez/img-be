
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {image_url: 'https://images.pexels.com/photos/216695/pexels-photo-216695.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', tag: 'tree', user_id: 5 },
        { image_url: 'https://images.pexels.com/photos/161702/harmony-relax-rock-moqui-161702.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', tag: 'rock', user_id: 3},
        { image_url: 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', tag: 'wall', user_id: 4},
        { image_url: 'https://images.pexels.com/photos/216695/pexels-photo-216695.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', tag: 'hawk', user_id: 1 },
        { image_url: 'https://images.pexels.com/photos/161702/harmony-relax-rock-moqui-161702.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', tag: 'brick', user_id: 2},
        {image_url: 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', tag: 'tree', user_id: 6},
        { image_url: 'https://images.pexels.com/photos/161702/harmony-relax-rock-moqui-161702.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', tag: 'rock', user_id: 3},
        { image_url: 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', tag: 'wall', user_id: 4},
        { image_url: 'https://images.pexels.com/photos/216695/pexels-photo-216695.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', tag: 'hawk', user_id: 1 },
        { image_url: 'https://images.pexels.com/photos/161702/harmony-relax-rock-moqui-161702.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', tag: 'brick', user_id: 2},
        { image_url: 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', tag: 'tree', user_id: 6},
        { image_url: 'https://images.pexels.com/photos/161702/harmony-relax-rock-moqui-161702.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', tag: 'brick', user_id: 2},
        { image_url: 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', tag: 'tree', user_id: 1},
        { image_url: 'https://images.pexels.com/photos/161702/harmony-relax-rock-moqui-161702.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', tag: 'brick', user_id: 2},
        { image_url: 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', tag: 'tree', user_id: 1}
      ]);
    });
};
