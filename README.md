#### 將檔案加入版本控制

$ git init

#### 查看 git 的狀態

$ git status

#### 提交這次的修改

$ git commit -m "資訊"

#### 檢視這次修改的差異

$ git diff

#### 針對已經加入過的檔案，可以直接用以下指令提交

$ git commit -am "xxxxx"

#### 可以「反悔」加入暫存區

$ git restore --staged login.html

#### 反悔剛剛的修改

$ git restore login.html

#### 讓檔案回到某個特定版本

$ git checkout <commit> test.txt

#### 讓檔案回復到前兩個版本

$ git checkout HEAD~2 test.txt

#### 回到現在版本

$ git checkout HEAD

#### 查看提交紀錄

$ git log

#### 查看特定檔案的紀錄

$ git log <file>

#### 查看檔案修改細節

$ git log -p a.txt

#### 可以搜尋關鍵字

$ git log --grep="delete"

#### 查看內容是誰編寫的

$ git blame test.txt

#### 檢視分支

$ git branch

#### 建立分支

$ git branch <branch-name>

#### 切換分支

$ git switch <branch-name>

#### 將 feature-login 加入到 main 裡面

$ git switch main
$ git merge feature-login