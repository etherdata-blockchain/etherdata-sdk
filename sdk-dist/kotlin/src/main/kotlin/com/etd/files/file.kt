package com.etd.files

import com.paradeum.client.DfsClient
import com.paradeum.client.DfsConfig
import com.paradeum.model.UploadDto

class File(val host: String) {
    private val client: DfsClient

    init {
        val config = DfsConfig()
        config.isRandom = true;
        config.threadLimits = 2;
        config.temporaryDataDir = "/data/Downloads/dfstemporatory"; //临时数据目录
        config.pnList.add(host); //pnode 的服务列表
        client = DfsClient.getClient(config)
    }

    /**
     * Upload file
     *
     * @param filePath local file path
     * @param days save duration
     * @return File's id
     */
    fun uploadFile(filePath: String, days: Int = 1): String {
        val uploadDto = UploadDto(
            days,
            filePath,
            null,
            null,
            null,
        )


        val resp = client.upload(host, uploadDto)
        return resp.data.afid
    }

    /**
     * Download file
     *
     * @param downloadPath File download's path
     * @param fileName File's name
     * @param fileId File's id
     * @return Download path
     */
    fun downloadFile(downloadPath: String, fileName: String, fileId: String): String {
        return client.download(host, fileId, downloadPath, fileName)
    }

}