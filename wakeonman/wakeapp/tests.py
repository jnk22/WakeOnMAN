from django.test import TestCase

from .models import Host, HostCategory


class HostTests(TestCase):
    def test_start_with_mac(self):
        host_no_mac = Host('TestHost', mac_address='00:11:22:33:44:55')
        self.assertIs(host_no_mac.start(), True)

    def test_start_without_mac(self):
        host_no_mac = Host('TestHost')
        with self.assertRaises(AttributeError) as cm:
            host_no_mac.start()

        self.assertEqual(str(cm.exception), "No MAC address available")


class HostCategoryTests(TestCase):
    pass
