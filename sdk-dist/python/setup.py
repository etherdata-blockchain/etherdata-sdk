import setuptools
long_description = """
# Etherdata Python SDK
Please refer more info on our GitHub
"""
setuptools.setup(
    name="etherdata-sdk-python",
    version="3.3.1",
    author="etherdata-blockchain",
    author_email="etherdata-blockchain@etd.com",
    description="SDK for etherdata-blockchain",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/etherdata-blockchain/etherdata-sdk",
    project_urls={
        "Bug Tracker": "https://github.com/etherdata-blockchain/etherdata-sdk",
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    package_dir={"": "src"},
    packages=setuptools.find_packages(where="src"),
    python_requires=">=3.6",
    install_requires=["requests>=2.0.0", "dataclasses-json>=0.5.6", "eth-account==0.6.1"],
)
