import { initializeApp, getApps, cert } from 'firebase-admin/app';

const firebaseAdminConfig = {
    credential: cert({
      projectId: "weblink-bebb8",
      clientEmail: "firebase-adminsdk-o19c2@weblink-bebb8.iam.gserviceaccount.com",
      privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCwUNdMaNc0YHl4\n3eLa9QZnxWGreyMBsjXczGwMsn/mMAEs4bAh/c80gO8tT6gS56jH7HszNpHJ7YnT\nvyQaRgrvWx2Rl5zojcTt4B0tNbr85LpN00dnEav/TIv2ywjN4a9p1ml4/v3K4vlR\nadgxjQsd7YweVoAI5lQyJg+x3hVcwCzpK0yNgIh5WHpGrIL9VVToSmpwr8rtUd66\nJRPWqGe+j/0pZ1UMKLUuXHRF5sA/az84lpLdnoc6DxXZ4T9klOSuyuR1XQwXYd1n\nVygH50xqEudcN/lEklK1tItPJA1x3JmY6fRpKt6I0SwCFlE8kEhDyFX/la6sMils\nrE4vzuttAgMBAAECggEAAu5WljT6tKXX641AI8rA2nzNrbjRXlO4XQWR5zimt+kP\niBbcTOn8sHeCr2VGnlA0tfKzSDJQkpop545SRk122nE4vsfyRg1CwlnLBoW6C9+j\n+IytBOpfWLEA8KSxYEaAO2XBpyRdSarJtqVVQtrMen488MnfXk2eDxqLbhAPfKqF\nSG4glKmE5nQ5a5cv6fpy/WEuIqGpHxoeSPRNc2YS9aYgaHM7TK5i9/XEuVEHz71g\nQZ/oK1X4AuxH4CixDSJGW0cHCah7gv3H9h6AISB0n1zRdh8on0qqcpu56/CTk2Xg\nKGWgHfRI/5tsfmoIYdsP712rEvEqOfOEjX0yQkGXFwKBgQDjZ7J+2Ps0UaMdTu1g\nzy7nCpUkm/1LdLg6k/3JH6gRD40fsxM4W92eT3zrINt7e8d+85as9kGUs0duJ7ZX\nwvrSfIIG3SXQGPm28/qDq+xntFMqZxR6v3C6mZXHiUiHpupBMjft3bPpN4xEwynh\nY8FCTNJk2cyTPlZBBySx5ywrLwKBgQDGfIy8Jg+5k4VnqeH3PY9ux+pPHzYnBvHm\n7Tu/oU7QwS4UOF/pPX5DEKwJYRl3v17OwV5+pvNylsJm/tMFfQZ3xwJxEuDZQuCw\nDKeoveOwgT7LOzvns6wBXixmROYBhx+VOhZiUeD88L3qQ70ehdbxucAwi0U8clyp\nbxRHLjo8IwKBgERAnWxBB7R+RCzJwalqxbMGlBj20KFTGPBL9sHkxHbKahr3jm89\n81hOlzmjFP0M+6V4yuKCztAotumy9aGFne6K/CO/QFgjBuAIfkoC0eOWVdfGNHla\n+CSpcDEBXUmJqYmD3xF/lz4KNAl3YhyJ6jlSAVvPmv0empjN4g+bSMB1AoGADpRr\nig6JrSoG7Jxv+sdM1+hbb8BtK+S4tCvM7cCdl3v5NIcHlIxtz+NTn8TAKCmofyt5\nE3iT/WDRmtsxCQAsD3RQ25l1ZsAg3Q2w6xY3uWllAWyyc8yg3+DZBhIdixMv4LhJ\nmKNHEY1lheW/6JQQO+VXFrnENjJ4WAHOzYO5x10CgYEAr1D4fwPj/LzjfaAsttwz\nw3IdZ1vPGk68GlSJyItbdGNqyJ4GMnDEDQgKcarDf7TPB4qpP37Oic+zYK63jWzS\n8wCjlede8xVNqji7gp08bL1mcW5WJD1SqGdbgOFtKTcKtZ4bDwJNOojdZWCgWfvx\nTgaSw4OsDqwlymQsTFObIZY=\n-----END PRIVATE KEY-----\n"
    })
}

export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp(firebaseAdminConfig);
    }
}
