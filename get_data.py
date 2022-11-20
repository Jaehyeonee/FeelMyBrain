from pylsl import StreamInlet, resolve_stream # first resolve an EEG # stream on the lab network

class lsl_control:
  def __init__(self):
    self.state = False
    self.timelist = []
    self.time = 0
    self.data = 0
  
  def stop_getting_lsl(self):
    self.state = False
    # 측정 다 했으면 전체 lsl data 리턴하기
    return self.timelist


  def start_getting_lsl(self):
    self.state = True
    print("looking for an EEG stream...")
    streams = resolve_stream('type', 'EEG') # create a new inlet to read # from the stream
    inlet = StreamInlet(streams[0])
    
    # 다시 측정할 때 timelist 초기화
    self.timelist = []
    # state가 True일 때, 계속해서 뇌파 데이터 얻기 (state가 False일 때, 중단)
    while self.state:
    # get a new sample (you can also omit the timestamp part if you're not interested in it)    
      sample, timestamp = inlet.pull_sample()
      
      # 나중에 정제한 데이터를 self.data에 집어넣기
      self.data = sample
      self.time = timestamp
      self.timelist.append(self.time, self.data) 

    return 
    
