import numpy as np
import pandas as pd
import scipy.io

def get_con(time, af7):
    time = time

    n = 200  # 신호 길이
    k = np.arange(n)
    Fs = 50
    T = n/Fs
    freq = k/T
    freq = freq[range(int(n/2))]

    t = np.arange(200)

    Y = np.fft.fft(af7)/n  # af7이 df['AF7'][:200] 형태일 때
    Y = Y[range(int(n/2))]


    # theta
    for i in range(16, 28):
        theta += abs(Y)[i]

    # smr
    for i in range(48, 60):
        smr += abs(Y)[i]
        
    # mBeta
    for i in range(60, 72):
        mBeta += abs(Y)[i]
    
    con = (smr + mBeta) / theta

    return (time, con)