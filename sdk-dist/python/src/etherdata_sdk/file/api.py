import urllib.parse


class API:
    url: str

    def get_url(self, path):
        """
        Return the joined url

        ### Arguments

        path: URL path
        """
        return urllib.parse.urljoin(self.url, path)
