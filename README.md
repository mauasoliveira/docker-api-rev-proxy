# Point DNS Masq

To install and configure *.localhost to localhost:

Taken from [https://medium.com/@kharysharpe/automatic-local-domains-setting-up-dnsmasq-for-macos-high-sierra-using-homebrew-caf767157e43<Paste>]

brew install dnsmasq

mkdir -pv $(brew — prefix)/etc/

echo ‘address=/.localhost/127.0.0.1’ >> $(brew — prefix)/etc/dnsmasq.conf

echo ‘port=53’ >> $(brew — prefix)/etc/dnsmasq.conf

sudo brew services start dnsmasq

sudo mkdir -v /etc/resolver

sudo bash -c 'echo "nameserver 127.0.0.1" > /etc/resolver/localhost'
