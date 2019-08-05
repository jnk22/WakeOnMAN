import wakeonlan
import getmac


class Category:
    """Represents category for stored hosts.

    """

    def __init__(self, name: str) -> None:
        self.name = name
        self.hosts = set()

    def add_host(self, host) -> None:
        self.hosts.add(host)


class Host:
    """Contains specific information about a remote machine such as
    MAC address, IP address and such.

    """

    def __init__(self, name: str, category, mac_address=None,
                 ipv4_address=None, ipv6_address=None, wol_port=9):
        # Define descriptive attributes
        self.name = name
        self.category = category
        self.last_online = None
        self.last_started = None
        self.state = None

        # Define address information
        self.ipv4_address = ipv4_address
        self.ipv6_address = ipv6_address
        self.wol_port = wol_port
        if mac_address:
            self.mac_address = mac_address
        elif ipv4_address or ipv6_address:
            self.mac_address = self.__find_mac()

    def start(self):
        if self.mac_address:
            wakeonlan.send_magic_packet(self.mac_address)
        else:
            raise AttributeError("No MAC address available")

    def state_check(self):
        pass

    def state_update(self):
        pass

    def __find_mac(self):
        mac_address = getmac.get_mac_address(self.ipv4_address)
        if mac_address:
            return mac_address

        mac_address = getmac.get_mac_address(self.ipv6_address)
        if mac_address:
            return mac_address
