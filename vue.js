var vm = new Vue({
  el: "#myapp",
  data: {
    length: 8,
    numbers: false,
    symbols: false,
    result: ''
  },
  methods: {
    generatePassword: function() {
      var seed_letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var seed_numbers = '0123456789';
      var seed_symbols = '!#$%&()=~|';
      var seed = seed_letters;
      var length = this.length;
      var psw = '';

      if (this.numbers) {
        seed += seed_numbers;
      }
      if (this.symbols) {
        seed += seed_symbols;
      }

      while (length--) {
        psw += seed[Math.floor(Math.random() * seed.length)];
      }

      this.result = psw;
    }
  }
})
