<template>
  <div class="slides">
      <div class="slides-inner">
          <div v-for="slide in slides" >
              <!-- Slide is the component that holds each image and description -->
            <slide  v-bind:slide= "slide" ></slide>
        </div>
      </div>    
  </div>
</template>

<script>

    import Slide from './Slide';
   
    export default {

         props: {

            itemsPerSlide: {

                type: null,
                default: 1
            }
        },

        data(){

            return {

                // as mentioned beforeI am completely new to vue and
                // I do not know how to populate components from arrays... 
                // there should be a better way than this I presume though?
                slides: [
                    {src: urlArray[0]},
                    {src: urlArray[1]},
                    {src: urlArray[2]},
                    {src: urlArray[3]},
                    {src: urlArray[4]},
                    {src: urlArray[5]},
                    {src: urlArray[6]},
                    {src: urlArray[7]},
                    {src: urlArray[8]},
                    {src: urlArray[9]},
                    {src: urlArray[10]},
                    {src: urlArray[11]},
                    {src: urlArray[12]},
                    {src: urlArray[13]},
                    {src: urlArray[14]},
                    {src: urlArray[15]},
                    {src: urlArray[16]},
                    {src: urlArray[17]},
                    {src: urlArray[18]},
                    {src: urlArray[19]},
                    {src: urlArray[20]},
                    {src: urlArray[21]},
                    {src: urlArray[22]},
                    {src: urlArray[23]},
                    {src: urlArray[24]},
                    {src: urlArray[25]},
                    {src: urlArray[26]},
                    {src: urlArray[27]},
                    {src: urlArray[28]},
                    {src: urlArray[29]},
                    {src: urlArray[30]},
                    {src: urlArray[31]},
                    {src: urlArray[32]},
                    {src: urlArray[33]},
                    {src: urlArray[34]},
                    {src: urlArray[35]},
                    {src: urlArray[36]},
                    {src: urlArray[37]},
                    {src: urlArray[38]},
                    {src: urlArray[39]},
                    {src: urlArray[40]},
                    {src: urlArray[41]},
                    {src: urlArray[42]},
                    {src: urlArray[43]},
                    {src: urlArray[44]},
                    {src: urlArray[45]},
                    {src: urlArray[46]},
                    {src: urlArray[47]},
                    {src: urlArray[48]},
                    {src: urlArray[49]},
                    {src: urlArray[50]},
                    {src: urlArray[51]},
                    {src: urlArray[52]},
                    {src: urlArray[53]},
                    {src: urlArray[54]},
                    {src: urlArray[55]},
                    {src: urlArray[56]},
                    {src: urlArray[57]},
                    {src: urlArray[58]},
                    {src: urlArray[59]},
                    {src: urlArray[60]},
                    {src: urlArray[61]},
                    {src: urlArray[62]},
                    {src: urlArray[63]},
                    {src: urlArray[64]},
                    {src: urlArray[65]},
                    {src: urlArray[66]},
                    {src: urlArray[67]},
                    {src: urlArray[68]},
                    {src: urlArray[69]},
                    {src: urlArray[70]},
                    {src: urlArray[71]},
                    {src: urlArray[72]},
                    {src: urlArray[73]},
                    {src: urlArray[74]},
                    {src: urlArray[75]},
                    {src: urlArray[76]},
                    {src: urlArray[77]},
                    {src: urlArray[78]},
                    {src: urlArray[79]},
                    {src: urlArray[80]},
                    {src: urlArray[81]},
                    {src: urlArray[82]},
                    {src: urlArray[83]},
                    {src: urlArray[84]},
                    {src: urlArray[85]},
                    {src: urlArray[86]},
                    {src: urlArray[87]},
                    {src: urlArray[88]},
                    {src: urlArray[89]},
                    {src: urlArray[90]},
                    {src: urlArray[91]},
                    {src: urlArray[92]},
                    {src: urlArray[93]},
                    {src: urlArray[94]},
                    {src: urlArray[95]},
                    {src: urlArray[96]},
                    {src: urlArray[97]},
                    {src: urlArray[98]},
                    {src: urlArray[99]},
                    {src: urlArray[100]},
                    {src: urlArray[101]},
                    {src: urlArray[102]},
                    {src: urlArray[103]},
                    {src: urlArray[104]},
                    {src: urlArray[105]},
                    {src: urlArray[106]},
                    {src: urlArray[107]},
                    {src: urlArray[108]},
                    {src: urlArray[109]},
                    {src: urlArray[110]},
                    {src: urlArray[111]},
                    {src: urlArray[112]},
                    {src: urlArray[113]},
                    {src: urlArray[114]},
                    {src: urlArray[115]},
                    {src: urlArray[116]},
                    {src: urlArray[117]},
                    {src: urlArray[118]},
                    {src: urlArray[119]},
                    {src: urlArray[120]},
                    {src: urlArray[121]},
                    {src: urlArray[122]},
                    {src: urlArray[123]},
                    {src: urlArray[124]},
                    {src: urlArray[125]},
                    {src: urlArray[126]},
                    {src: urlArray[127]},
                    {src: urlArray[128]},
                    {src: urlArray[129]},
                    {src: urlArray[130]},
                    {src: urlArray[131]},
                    {src: urlArray[132]},
                    {src: urlArray[133]},
                    {src: urlArray[134]},
                    {src: urlArray[135]},
                    {src: urlArray[136]},
                    {src: urlArray[137]},
                    {src: urlArray[138]},
                    {src: urlArray[139]},
                    {src: urlArray[140]},
                    {src: urlArray[141]},
                    {src: urlArray[142]},
                    {src: urlArray[143]},
                    {src: urlArray[144]},
                    {src: urlArray[145]},
                    {src: urlArray[146]},
                    {src: urlArray[147]},
                    {src: urlArray[148]},
                    {src: urlArray[149]},
                    {src: urlArray[150]},
                    {src: urlArray[151]},
                    {src: urlArray[152]},
                    {src: urlArray[153]},
                    {src: urlArray[154]},
                    {src: urlArray[155]},
                    {src: urlArray[156]},
                    {src: urlArray[157]},
                    {src: urlArray[158]},
                    {src: urlArray[159]},
                    {src: urlArray[160]},
                    {src: urlArray[161]},
                    {src: urlArray[162]},
                    {src: urlArray[163]},
                    {src: urlArray[164]},
                    {src: urlArray[165]},
                    {src: urlArray[166]},
                    {src: urlArray[167]},
                    {src: urlArray[168]},
                    {src: urlArray[169]},
                    {src: urlArray[170]},
                    {src: urlArray[171]},
                    {src: urlArray[172]},
                    {src: urlArray[173]},
                    {src: urlArray[174]},
                    {src: urlArray[175]},
                    {src: urlArray[176]},
                    {src: urlArray[177]},
                    {src: urlArray[178]},
                    {src: urlArray[179]},
                    {src: urlArray[180]},
                    {src: urlArray[181]},
                    {src: urlArray[182]}              
                ],
                
                innerWidth: 0,
                singleWidth: 0
            }
        },
       
      
        components: {
            Slide
        },

        attached() {
            let singleWidth = this.$el.clientWidth/this.itemsPerSlide
            this.$set('singleWidth', singleWidth)
            this.$set('innerWidth', singleWidth * this.slides.length)
        }
    }

// well, as mentioned I am fairly new to webdevelopment and brand new to vue and express
// I couldn´t figure out how to get the file from the server, so I made this Not so elegant emergency sollution...
      var urlString = `https://amsterdam.fkttech.com/5c/71/22/5c712270384d40139575f820f6e91f54.jpg
https://amsterdam.fkttech.com/68/c1/4c/68c14c1d395346deaf695dd847968f6e.jpg
https://amsterdam.fkttech.com/67/c6/76/67c67619ca1d4d41b35b4b1d149d7417.png
https://amsterdam.fkttech.com/2c/69/cb/2c69cbfad35445ed8a45aba0c0108d64.jpg
https://amsterdam.fkttech.com/7e/76/5c/7e765cf9042b4a4ca22027a38d95d6d2.jpg
https://amsterdam.fkttech.com/d1/a6/04/d1a6044abe6743b29bdf55750494d548.jpg
https://amsterdam.fkttech.com/e0/6a/ef/e06aef67ffa241be8cc5eebb55a1f990.jpg
https://amsterdam.fkttech.com/1d/c2/d4/1dc2d433689e4a89b51c9acfd3af21da.png
https://amsterdam.fkttech.com/fa/02/48/fa0248b3a1f648409a02daf959ccde3e.jpg
https://amsterdam.fkttech.com/5b/68/d2/5b68d242fe584164b41d94a95c5bf5fa.jpg
https://amsterdam.fkttech.com/1f/6b/13/1f6b1360056c477e95815e16254d0820.jpg
https://amsterdam.fkttech.com/db/13/fb/db13fbc223ae4023b67d7faf63eb4f85.jpg
https://amsterdam.fkttech.com/7a/89/37/7a8937dd82254d35ba38bbb9428d0077.png
https://amsterdam.fkttech.com/25/a4/14/25a414145e3e499fa3f7cac779a32d7a.png
https://amsterdam.fkttech.com/58/04/d8/5804d8155ed34a248e426dffb4192de7.png
https://amsterdam.fkttech.com/08/17/18/081718b8e1984be488114f946585675a.jpg
https://amsterdam.fkttech.com/a8/5e/67/a85e67dd316147ee84b2a7dcd844040e.jpg
https://amsterdam.fkttech.com/56/49/e6/5649e6f06d334ce3873cfc0617912cec.jpg
https://amsterdam.fkttech.com/62/50/7f/62507fccec67433aae823faee2ebe77b.jpg
https://amsterdam.fkttech.com/c4/da/cf/c4dacfbf05cb4b938d82831a96d14c42.png
https://amsterdam.fkttech.com/2e/a6/89/2ea6891dd339484cb7ee0ee7e46a1ee8.jpg
https://amsterdam.fkttech.com/5f/f9/81/5ff9819d94fa4456bfd519bfa43fbcbc.jpg
https://amsterdam.fkttech.com/4e/f2/38/4ef23808db004cc59f5eb35d05cce859.jpg
https://amsterdam.fkttech.com/b7/ff/bc/b7ffbc5bcb744259b13ed3cd5d33eeae.jpg
https://amsterdam.fkttech.com/86/94/de/8694de0b89e94af29384d8126679f112.jpg
https://amsterdam.fkttech.com/6f/1e/dd/6f1edd61a0d3468ebcea11ca9ebf2094.jpg
https://amsterdam.fkttech.com/58/2a/00/582a00fe663d45a9ae5688fce7c6e0ab.png
https://amsterdam.fkttech.com/b4/f0/b6/b4f0b6356393442380541ac89ab72f22.jpg
https://amsterdam.fkttech.com/80/4f/64/804f640f25df4213b8ecbb915cef8ca5.jpg
https://amsterdam.fkttech.com/68/4d/19/684d19ce7f474db8854999ba603e3a28.jpg
https://amsterdam.fkttech.com/63/d4/db/63d4db8dd9d64ec291a8a8d5eb3ed1b9.png
https://amsterdam.fkttech.com/1d/26/aa/1d26aa47517244a58e538d0937070164.jpg
https://amsterdam.fkttech.com/02/b8/dd/02b8dd50304f4bfb9ddd5a0edc3039e0.png
https://amsterdam.fkttech.com/bd/76/38/bd76383a5c3845ee9c616d0d66107796.jpg
https://amsterdam.fkttech.com/f0/db/95/f0db951c94a2437f891b81b3b5d45664.jpg
https://amsterdam.fkttech.com/0c/c5/5b/0cc55b7f14f04264979f1641329bc9c2.jpg
https://amsterdam.fkttech.com/89/54/3f/89543f1ecdab4adeaf2ae8c62bf5bf26.jpg
https://amsterdam.fkttech.com/7c/7c/9f/7c7c9ff2042045a2bd52c8bc4459b933.jpg
https://amsterdam.fkttech.com/aa/3f/d7/aa3fd7f480ab4a46af3011d6890bf8a7.png
https://amsterdam.fkttech.com/ef/82/98/ef82984ad7644ab88c6ed74848e90732.jpg
https://amsterdam.fkttech.com/2c/53/41/2c5341cbd5344990abd7f0e183b742ab.png
https://amsterdam.fkttech.com/a1/ab/cb/a1abcbe66810419cb228b54ad3cfe00c.jpg
https://amsterdam.fkttech.com/cf/13/88/cf1388dd5f754bdbb96fc96a6ae90518.png
https://amsterdam.fkttech.com/50/ac/47/50ac47cf697644fcbfb7ad4366e54dca.jpg
https://amsterdam.fkttech.com/16/65/73/16657389deae46a09d72c8214f2c41da.jpg
https://amsterdam.fkttech.com/75/38/0b/75380b2a541447e4aff56de5d5b9810f.jpg
https://amsterdam.fkttech.com/1e/a9/d4/1ea9d4d4d0b94717a08bbeb8d78e2b35.jpg
https://amsterdam.fkttech.com/95/83/7b/95837b3f64404c339a562d6ed1a25cce.jpg
https://amsterdam.fkttech.com/cc/63/da/cc63da96a9474d9a9c1ca3998d3a4c06.png
https://amsterdam.fkttech.com/s/8b/48/6d/8b486dabb22445f2845af67dc996dfe2.jpg
https://amsterdam.fkttech.com/77/86/7e/77867efd158b4bbb96b2159d4319aee3.jpg
https://amsterdam.fkttech.com/f8/6a/33/f86a3321898f43d08197785f668dfdc3.jpg
https://amsterdam.fkttech.com/26/4e/d4/264ed4bb035b43638a5ce0159c524b94.jpg
https://amsterdam.fkttech.com/8b/fe/57/8bfe5717a9bb4e66bccc74b73b4db0dd.jpg
https://amsterdam.fkttech.com/16/2f/aa/162faa5ea7504306b60ee11088151bfa.jpg
https://amsterdam.fkttech.com/0e/ee/b3/0eeeb384025f4808851df2c64def5895.jpg
https://amsterdam.fkttech.com/ef/ce/c8/efcec8b030a844b6bd3314bf3f215eff.jpg
https://amsterdam.fkttech.com/18/d0/47/18d047d860494d128614782fb9f35796.jpg
https://amsterdam.fkttech.com/af/a2/95/afa2954d9c204bfda09c42bdf7084b47.jpg
https://amsterdam.fkttech.com/fb/31/d2/fb31d2997da44479b1b85003e07d565a.jpg
https://amsterdam.fkttech.com/c9/67/4d/c9674dec8325425bafb60491782e0e41.png
https://amsterdam.fkttech.com/60/fb/0b/60fb0b888660477ab977414a82408095.jpg
https://amsterdam.fkttech.com/4b/c6/af/4bc6af3d8cb44ffb9dd76cdb4fc48d9d.png
https://amsterdam.fkttech.com/51/16/4c/51164c4f69a045668b0ed22a55800aa1.jpg
https://amsterdam.fkttech.com/82/c0/f7/82c0f7f5ec3e49a7abdac9d82a604905.png
https://amsterdam.fkttech.com/1a/9a/b8/1a9ab8e573234213bad2f551dd5918ea.jpg
https://amsterdam.fkttech.com/6d/39/0c/6d390c053acc404ba6f40c43fb37fea5.jpg
https://amsterdam.fkttech.com/b8/4e/d2/b84ed29b987c4c9fa0a6520d45700a30.jpg
https://amsterdam.fkttech.com/b5/5f/3a/b55f3ab54ea448978b8e2cbfeb16e417.jpg
https://amsterdam.fkttech.com/64/af/2a/64af2a8e24d84815859eee832503b418.jpg
https://amsterdam.fkttech.com/14/b3/52/14b35211b0ae4ca5b9cb1d6bbc94702b.jpg
https://amsterdam.fkttech.com/64/3d/3a/643d3a221c2f4171aa432fc765fae611.jpg
https://amsterdam.fkttech.com/11/f5/78/11f578849584429b81ae3caf3b3c92dc.jpg
https://amsterdam.fkttech.com/e6/41/57/e641577441d74ee1a819894b5b62773b.jpg
https://amsterdam.fkttech.com/d4/e3/bd/d4e3bd4322334333b251a209aec02108.png
https://amsterdam.fkttech.com/60/7f/32/607f32a502e6418b9593354dcb85f933.png
https://amsterdam.fkttech.com/d1/78/97/d17897294be34972840e35c488fce75b.png
https://amsterdam.fkttech.com/3d/1c/f1/3d1cf1d2afe04609b5ecc87f36f41f9a.jpg
https://amsterdam.fkttech.com/d6/e9/16/d6e91633dfdf4fe6a2df727adf89f0ad.jpg
https://amsterdam.fkttech.com/17/08/85/1708858c756b40a7b632f71055b86344.png
https://amsterdam.fkttech.com/d0/63/bc/d063bcadc9d045edaa6991e9656b47c5.jpg
https://amsterdam.fkttech.com/fa/fe/a6/fafea621f78b4455b99b0a48b18ff1b7.jpg
https://amsterdam.fkttech.com/ef/0c/2f/ef0c2f1564884336bffdc1a534a44c85.jpg
https://amsterdam.fkttech.com/60/9b/6a/609b6ae5bd494087b986f523e1f8658e.jpg
https://amsterdam.fkttech.com/08/8e/be/088ebeaf1c1f49cead0160402465c817.jpg
https://amsterdam.fkttech.com/28/89/54/288954fd11974bf08ced1e04a6dc5a52.jpg
https://amsterdam.fkttech.com/f4/e2/58/f4e258ee1ae34493bb1bbd6fa8c17033.png
https://amsterdam.fkttech.com/d7/15/3f/d7153f99a1c042fbba08f84605fa991c.jpg
https://amsterdam.fkttech.com/b6/91/f5/b691f50b742d4c1d8d13d85075be284c.jpg
https://amsterdam.fkttech.com/96/d2/d0/96d2d0b5ee2a4df8918517a3e53409cc.jpg
https://amsterdam.fkttech.com/62/bd/2e/62bd2e773432433db91814940c7f6c85.jpg
https://amsterdam.fkttech.com/d3/b0/05/d3b0055804414ea7b0ee42cd2342d718.jpg
https://amsterdam.fkttech.com/96/9c/69/969c696e2c2d40a182196b14f40e59f6.jpg
https://amsterdam.fkttech.com/2d/38/1f/2d381fbcb01840f0acc4b767e780c1ec.jpg
https://amsterdam.fkttech.com/e3/27/29/e3272985034640cba960c43977e1b3ad.jpg
https://amsterdam.fkttech.com/24/96/ee/2496eecac0f545a6bcce6ee91a32e7b5.png
https://amsterdam.fkttech.com/51/e6/c5/51e6c5036ba5495cbf689350a8384781.jpg
https://amsterdam.fkttech.com/88/59/e9/8859e99f61fa4a209a8ee3952b250934.png
https://amsterdam.fkttech.com/e9/6a/d0/e96ad065cafb48ec90240df2922760dd.png
https://amsterdam.fkttech.com/3b/b5/ad/3bb5ad601c7340dd94ccf413ff523dd9.jpg
https://amsterdam.fkttech.com/c4/6d/b6/c46db6353f274733b4cf0fb022896408.png
https://amsterdam.fkttech.com/57/bf/de/57bfdebb3623488e82e2da793f9325c8.jpg
https://amsterdam.fkttech.com/e2/14/d0/e214d0304bac4b68b7a07b8ad6869ff0.png
https://amsterdam.fkttech.com/d9/2e/1f/d92e1fccf16f4aab84133ea93f3cb611.jpg
https://amsterdam.fkttech.com/fc/6e/5b/fc6e5bc605a2442ca5f5340113047708.jpg
https://amsterdam.fkttech.com/8e/36/b5/8e36b58d34a3439dbaa5324dd7b03752.jpg
https://amsterdam.fkttech.com/52/df/86/52df869621184e628b98f5618d2902bf.png
https://amsterdam.fkttech.com/58/ac/f9/58acf94235dd486dbabcca705bd1ca95.jpg
https://amsterdam.fkttech.com/5e/55/c3/5e55c339b3004185a4bbc7bc9b93663c.jpg
https://amsterdam.fkttech.com/1b/32/43/1b3243e8a8644844bf69c0b88f601cc6.png
https://amsterdam.fkttech.com/65/02/68/65026844899646ae98b50c5a70f886d3.png
https://amsterdam.fkttech.com/be/2b/1f/be2b1f18d5a642b7bdfa36fea4974b33.jpg
https://amsterdam.fkttech.com/b6/a4/6d/b6a46dad9a714658bf726ea0ae16824d.jpg
https://amsterdam.fkttech.com/53/1a/37/531a3751b2fb4674919d5a422b1a8a14.png
https://amsterdam.fkttech.com/9f/27/88/9f2788b4db03420dac9c1a9385a4ae0a.jpg
https://amsterdam.fkttech.com/43/bd/f6/43bdf6f145204acab6885bafb5880bdd.jpg
https://amsterdam.fkttech.com/95/05/56/9505566a37f74b168f0c41f01a663a03.jpg
https://amsterdam.fkttech.com/cb/1e/e5/cb1ee575a4824f9a9a7a44a5c6d42657.jpg
https://amsterdam.fkttech.com/b7/55/0c/b7550c1372fa49b28ed2a8a72f384345.jpg
https://amsterdam.fkttech.com/6f/ba/96/6fba961574424654bb5cc542d8482051.png
https://amsterdam.fkttech.com/8e/ae/d9/8eaed913ea26456f89f818af403eae4d.jpg
https://amsterdam.fkttech.com/4f/2e/31/4f2e31ea299d438c94977f2029b0d5a8.jpg
https://amsterdam.fkttech.com/0d/69/85/0d6985dd9f304761ad25fff7cba7d691.png
https://amsterdam.fkttech.com/7b/73/74/7b7374db0bf5487a8aef335a2df3792f.jpg
https://amsterdam.fkttech.com/64/ae/6f/64ae6f9d28494042ba756deac8b29b72.png
https://amsterdam.fkttech.com/df/1c/f5/df1cf58e59de44bfad6c84c37164a78d.png
https://amsterdam.fkttech.com/83/6b/ed/836bed91487c40aea489daf8c000a696.jpg
https://amsterdam.fkttech.com/d0/66/34/d06634b86fde4f04bb7f0e3654866109.jpg
https://amsterdam.fkttech.com/28/3a/ba/283aba07f38a4b2ca6b940a8d88a990f.png
https://amsterdam.fkttech.com/75/f7/13/75f713c8caff411591fb7016691c4e8c.png
https://amsterdam.fkttech.com/06/09/2c/06092c984b814f12b54202f0ab913899.jpg
https://amsterdam.fkttech.com/9c/f9/05/9cf9059ebc2e435faadf69158e57825b.png
https://amsterdam.fkttech.com/1c/a4/dd/1ca4dd922a1c4c26a2bcc2ffc43047b2.jpg
https://amsterdam.fkttech.com/65/de/0e/65de0ec0d3f64e158baafeeeccbe31e8.png
https://amsterdam.fkttech.com/8e/89/12/8e89128e1c704632b8091c5061114f2e.jpg
https://amsterdam.fkttech.com/21/b1/e6/21b1e61064494cfaa74c03d9ae8ae3b2.jpg
https://amsterdam.fkttech.com/2a/88/6d/2a886d5d590847aa873f431a42f8dcbe.jpg
https://amsterdam.fkttech.com/63/a3/4a/63a34a1c74cf4285954bef70af5c7856.jpg
https://amsterdam.fkttech.com/6b/80/2f/6b802f8dabbb462fb471a434fe068be8.jpg
https://amsterdam.fkttech.com/4c/0b/21/4c0b210546764341884d73884ffa7d3d.png
https://amsterdam.fkttech.com/39/e4/ff/39e4fff6f6684a0e99231045ae06d104.png
https://amsterdam.fkttech.com/d4/f2/91/d4f29171187d403085515d7f68c932e6.jpg
https://amsterdam.fkttech.com/53/c3/04/53c304f0ab6d439e8c8e4093d7797a6f.png
https://amsterdam.fkttech.com/96/7f/73/967f73f4328245e8bc6f44f5cf37515c.jpg
https://amsterdam.fkttech.com/71/46/33/71463357e866497bb6029c6d5b98caed.png
https://amsterdam.fkttech.com/1a/ed/fc/1aedfccbc7e84621a5846f72007fbc75.png
https://amsterdam.fkttech.com/ea/30/f2/ea30f2e0316347bdb1353dc1a9b16b87.jpg
https://amsterdam.fkttech.com/a8/ec/7c/a8ec7c837cd24080806f5be205a54066.png
https://amsterdam.fkttech.com/21/bb/7b/21bb7b7526a14c689e06b41c2e15ccb0.jpg
https://amsterdam.fkttech.com/f6/d7/e3/f6d7e3b691ce42b2aede4f1fe7dfd2c9.png
https://amsterdam.fkttech.com/4c/81/f3/4c81f342056449d28fa81d5e203de39a.jpg
https://amsterdam.fkttech.com/6e/e0/33/6ee033ce9b9b43b4869bf65bfe4994eb.jpg
https://amsterdam.fkttech.com/d5/35/a4/d535a4cf569448698e3b67c729811352.jpg
https://amsterdam.fkttech.com/90/a6/ce/90a6ce8e1f764b569ed4452a82964b80.png
https://amsterdam.fkttech.com/3a/40/44/3a4044b685914d54b2ac37c690a304c4.png
https://amsterdam.fkttech.com/d6/0c/dc/d60cdc370a4642dcbba2950678d4d2b6.jpg
https://amsterdam.fkttech.com/c6/8c/fe/c68cfe7c24154858890466903d0cc451.jpg
https://amsterdam.fkttech.com/de/b5/d7/deb5d78d4034451c85f30af1a1b753fe.jpg
https://amsterdam.fkttech.com/5c/58/cf/5c58cf093f654305b58eeff21610b6fc.jpg
https://amsterdam.fkttech.com/5e/b0/92/5eb092ea51aa4edb8476cd3e00a24e83.jpg
https://amsterdam.fkttech.com/4f/0d/84/4f0d84fb111b4d86be1c99c37723673b.png
https://amsterdam.fkttech.com/9d/d3/d7/9dd3d78f46214c8f8e31e40f7da5311e.jpg
https://amsterdam.fkttech.com/c9/ef/f9/c9eff9be636d437db923522367fbcd36.png
https://amsterdam.fkttech.com/d8/40/d9/d840d9e11f964902afe9a4637b9472de.jpg
https://amsterdam.fkttech.com/a4/c1/a6/a4c1a64a1b1a46e98a7643ef77acf543.jpg
https://amsterdam.fkttech.com/7a/88/57/7a885720a72b493b8e9d49b37198a69f.jpg
https://amsterdam.fkttech.com/82/b4/70/82b47068ef344992bd65824c6ae46940.jpg
https://amsterdam.fkttech.com/2d/cb/83/2dcb83d4df7240c0b743367cbdfc4ec1.jpg
https://amsterdam.fkttech.com/af/b2/5b/afb25b68977d4f2aa74c6faed3a7aa30.jpg
https://amsterdam.fkttech.com/64/aa/bc/64aabcf9fb194561b1e2de3f1fd2d5fe.png
https://amsterdam.fkttech.com/06/64/48/066448dabe524dbf8372bf6231eb1aba.jpg
https://amsterdam.fkttech.com/97/b9/b9/97b9b90b979d49fc9bde5b12ae20bd49.jpg
https://amsterdam.fkttech.com/af/12/25/af1225fa74ed47f9be75aa41afa81c02.jpg
https://amsterdam.fkttech.com/31/65/ba/3165baf9af484520b025f27092a8202e.jpg
https://amsterdam.fkttech.com/c9/c3/8c/c9c38c1971c84965ba9d450dc48719eb.jpg
https://amsterdam.fkttech.com/7b/53/c4/7b53c492625541a3a3f2a9a78430f802.jpg
https://amsterdam.fkttech.com/f2/19/f2/f219f21f65f64cedbad97aee484f35ba.jpg
https://amsterdam.fkttech.com/0a/1b/3d/0a1b3d3f702a453ca1f171e513c9e7a7.jpg
https://amsterdam.fkttech.com/89/60/23/896023214c784b07b3f7354255778a3d.jpg
https://amsterdam.fkttech.com/c1/de/04/c1de04b5dc314e508f10a549c56174a6.png
https://amsterdam.fkttech.com/21/f2/27/21f227b8b11544f68dbee6820fdddee0.jpg
https://amsterdam.fkttech.com/ae/a1/63/aea163b9e72043af8aa6ee92a326e8c1.jpg
`;

var urlArray = urlString.split('\n');

console.log(urlArray.length);
</script>

<style scoped>


</style>