package com.etd.files

import com.etd.constant.Constant
import com.paradeum.client.DfsClient
import com.paradeum.client.DfsConfig
import com.paradeum.common.encrypted.aes.ECBHelper
import com.paradeum.common.encrypted.rsa.RSAHelper
import com.paradeum.enums.EncryptedType
import com.paradeum.model.UploadDto
import com.paradeum.utils.HexUtils

class File {
    val client: DfsClient

    init {
        val config = DfsConfig()
        config.isRandom = true;
        config.threadLimits = 2;
        config.temporaryDataDir = "/data/Downloads/dfstemporatory"; //临时数据目录
        config.pnList.add(Constant.pNodes[0]); //pnode 的服务列表
        client = DfsClient.getClient(config)
    }

    fun uploadFile(filePath: String, days: Int = 1): String {
        val uploadDto = UploadDto(
            days,
            filePath,
            null,
            null,
            null,
        )

        val rsaKeyPair = RSAHelper.genKeyPair()
        uploadDto.encryptedType = EncryptedType.RSA
        uploadDto.asympubkey = HexUtils.convertBase64toHex(rsaKeyPair.publicKeyBase64); //rsa 公钥转16进制

        val ecbKey = ECBHelper.generateRandomECBKey()
        val cipherECBKey = RSAHelper.encrypt(ecbKey, rsaKeyPair.publicKeyBase64)

        val hexCipherECBKey = HexUtils.convert2Hex(cipherECBKey)
        uploadDto.sympassen = hexCipherECBKey

        val resp = client.uploadWithEncrypted(Constant.pNodes[0], uploadDto, ecbKey)
        return resp.data.afid
    }

    fun downloadFile(fileID: String, downloadPath: String) {

    }

}