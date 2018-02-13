<template>
		<v-layout column>
			<v-flex xs6 offset-xs3>
				<!-- <div class="white elevation-2">
				<div>
					<v-toolbar flat dense>Ismail</v-toolbar>
				</div>

				<div class="image">
					<img style="max-height: auto; max-width:100%" src="http://www.wsllpaper.com/wp-content/uploads/2013/07/mustang-gt-black-hd-desktop-wallpaper.jpg" alt="">
				</div>

				<div>
					<span>Like</span>
					<span>Comment</span>
				</div>
				</div> -->
				<v-card elevation-3 class="mb-4">
        <!-- <v-card-media
          class="white--text"
          height="auto"
          src="http://www.wsllpaper.com/wp-content/uploads/2013/07/mustang-gt-black-hd-desktop-wallpaper.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media> -->
        <div>
					<v-toolbar class="py-2" flat dense>
            <v-avatar class="mr-2" size="50px">
              <img src="https://i1.wp.com/www.mobmasker.com/wp-content/uploads/2017/08/1967-to-969-Ford-Mustang-GT-Fastback-96.jpg?w=256&h=256&crop=1&ssl=1" alt="">
            </v-avatar>
						<h3>Subagio Raya</h3>
					</v-toolbar>
				</div>

				<div class="image">
					<img style="max-height: auto; max-width:100%;" src="http://www.wsllpaper.com/wp-content/uploads/2013/07/mustang-gt-black-hd-desktop-wallpaper.jpg" alt="">
				</div>
        <v-card-title>
          <div>
            <div class="headline">Top western road trips</div>
            <span class="grey--text">1,000 miles of wonder</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn icon>
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn>
        </v-card-actions>
      </v-card>

      <v-card elevation-3>
        <div>
					<v-toolbar class="py-2" flat dense>
            <v-avatar class="mr-2" size="50px">
              <img src="https://i1.wp.com/www.mobmasker.com/wp-content/uploads/2017/08/1967-to-969-Ford-Mustang-GT-Fastback-96.jpg?w=256&h=256&crop=1&ssl=1" alt="">
            </v-avatar>
						<h3>Ismail</h3>
					</v-toolbar>
				</div>

				<div class="image">
					<img style="max-height: auto; max-width:100%;" src="https://cdn.teslarati.com/wp-content/uploads/2017/12/tesla-roadster-design-team-franz.jpg" alt="">
				</div>
        <v-card-title>
          <div style="text-align: left;">
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn icon>
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn>
        </v-card-actions>
        <hr>	
        <v-list three-line>
    			<template v-for="item in items">
      			<v-subheader v-if="item.header" v-text="item.header"></v-subheader>
      			<v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
      			<v-list-tile avatar v-else v-bind:key="item.title" @click="">
        			<v-list-tile-avatar>
          			<img v-bind:src="item.avatar"/>
        			</v-list-tile-avatar>
        			<v-list-tile-content>
          			<v-list-tile-title v-html="item.title"></v-list-tile-title>
          			<v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
        			</v-list-tile-content>
      			</v-list-tile>
    			</template>
        </v-list>
				
				<div class="px-4">
					<v-layout>
						<v-flex xs10>
							<v-text-field label="Comment"></v-text-field>
						</v-flex>

						<v-flex xs2>
							<v-btn flat class="cyan">Comment</v-btn>			
						</v-flex>
					</v-layout>
	    </div>
      </v-card>
			</v-flex>
		</v-layout>
	
</template>

<script>
export default {
	data () {
    return {
      items: [
        { header: 'Today' },
        { avatar: 'https://media.gq.com/photos/5582f8e409f0bee56440b52b/master/pass/entertainment-2011-12-MOTY-derrick-rose-derrick-rose-96.jpg', title: 'Sramoda Ra', subtitle: "<span class='grey--text text--darken-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nobis minus voluptate eaque iure atque! Saepe adipisci, doloremque deserunt illum, incidunt magni exercitationem sed voluptate culpa possimus harum a qui. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nihil maxime consequatur ab veritatis eligendi labore adipisci ducimus cum officia perspiciatis ut sequi voluptas praesentium, neque sunt minima sit error.</span>" },
        { divider: true, inset: true },
        { avatar: 'https://media.gq.com/photos/5582f8e409f0bee56440b52b/master/pass/entertainment-2011-12-MOTY-derrick-rose-derrick-rose-96.jpg', title: 'Rokana Rick', subtitle: "<span class='grey--text text--darken-2'>Wow, amazing. Must be very expensive</span>" },
        
      ]
    }
  }
}
</script>

<style>
	
</style>