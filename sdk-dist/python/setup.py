import setuptools
long_description = "# Etherdata BlockChain Python SDK"
setuptools.setup(
    name="etherdata-sdk-python",
    version="v3.0.2",
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
)
