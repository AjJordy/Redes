var dhcpd = require('dhcp');

var s = dhcpd.createServer({
  // System settings
  range: [
    "192.168.3.10", "192.168.3.99"
  ],
  forceOptions: ['hostname'], // Options that need to be sent, even if they were not requested
  static: {
   "11:22:33:44:55:66": "192.168.3.100"
  },
  // Option settings
  netmask: '255.255.255.0',
  router: [
    '192.168.0.1'
  ],
  dns: ["8.8.8.8", "8.8.4.4"],
  server: '192.168.0.1', // This is us
  hostname: function() {return 'foo' + i++; }
});

s.listen();