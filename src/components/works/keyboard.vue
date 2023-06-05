<!-- 键盘demo -->
<template>
  <div id="app">
    <div class="keyboardBox">
      <div class="upBoard">
        <div class="btnClass" style="margin-left: 52px">Esc</div>
        <div class="allFClass">
          <div class="btnClass">F1</div>
          <div class="btnClass">F2</div>
          <div class="btnClass">F3</div>
          <div class="btnClass">F4</div>
        </div>
        <div class="allFClass">
          <div class="btnClass">F5</div>
          <div class="btnClass">F6</div>
          <div class="btnClass">F7</div>
          <div class="btnClass">F8</div>
        </div>
        <div class="allFClass">
          <div class="btnClass">F9</div>
          <div class="btnClass">F10</div>
          <div class="btnClass">F11</div>
          <div class="btnClass">F12</div>
        </div>
        <div class="allFClass">
          <div class="btnClass">Print Screen</div>
          <div class="btnClass">Scroll Lock</div>
          <div class="btnClass">Pause Break</div>
        </div>
      </div>
      <div class="downBoard">
        <div>
          <!-- 第一行 -->
          <div class="allFClass">
            <div class="btnClass column">
              <div>~</div>
              <div>`</div>
            </div>
            <div class="btnClass column">
              <div>!</div>
              <div>1</div>
            </div>
            <div class="btnClass column">
              <div>@</div>
              <div>2</div>
            </div>
            <div class="btnClass column">
              <div>#</div>
              <div>3</div>
            </div>
            <div class="btnClass column">
              <div>$</div>
              <div>4</div>
            </div>
            <div class="btnClass column">
              <div>%</div>
              <div>5</div>
            </div>
            <div class="btnClass column">
              <div>^</div>
              <div>6</div>
            </div>
            <div class="btnClass column">
              <div>&</div>
              <div>7</div>
            </div>
            <div class="btnClass column">
              <div>*</div>
              <div>8</div>
            </div>
            <div class="btnClass column">
              <div>(</div>
              <div>9</div>
            </div>
            <div class="btnClass column">
              <div>)</div>
              <div>0</div>
            </div>
            <div class="btnClass column">
              <div>—</div>
              <div>_</div>
            </div>
            <div class="btnClass column">
              <div>+</div>
              <div>=</div>
            </div>
            <div class="btnClass" style="width: 130px">Bcakspace</div>
          </div>
          <!-- 第二行 -->
          <div class="allFClass">
            <div class="btnClass column" style="width: 100px">
              <div>Tab</div>
              <div>|←</div>
              <div>→|</div>
            </div>
            <div class="btnClass column">Q</div>
            <div class="btnClass column">W</div>
            <div class="btnClass column">E</div>
            <div class="btnClass column">R</div>
            <div class="btnClass column">T</div>
            <div class="btnClass column">Y</div>
            <div class="btnClass column">U</div>
            <div class="btnClass column">I</div>
            <div class="btnClass column">O</div>
            <div class="btnClass column">P</div>
            <div class="btnClass column">
              <div>{</div>
              <div>[</div>
            </div>
            <div class="btnClass column">
              <div>}</div>
              <div>]</div>
            </div>
            <div class="btnClass column" style="width: 100px">
              <div>|</div>
              <div>\</div>
            </div>
          </div>
          <!-- 第三行 -->
          <div class="allFClass">
            <div class="btnClass column" style="width: 121px">
              <div>Caps Lock</div>
            </div>
            <div class="btnClass column">A</div>
            <div class="btnClass column">S</div>
            <div class="btnClass column">D</div>
            <div class="btnClass column">F</div>
            <div class="btnClass column">G</div>
            <div class="btnClass column">H</div>
            <div class="btnClass column">J</div>
            <div class="btnClass column">K</div>
            <div class="btnClass column">L</div>
            <div class="btnClass column">
              <div>:</div>
              <div>;</div>
            </div>
            <div class="btnClass column">
              <div>"</div>
              <div>'</div>
            </div>
            <div class="btnClass column" style="width: 152px">Enter</div>
          </div>
          <!-- 第四行 -->
          <div class="allFClass">
            <div class="btnClass column" style="width: 173px">
              <div>Shift</div>
            </div>
            <div class="btnClass column">Z</div>
            <div class="btnClass column">X</div>
            <div class="btnClass column">C</div>
            <div class="btnClass column">V</div>
            <div class="btnClass column">B</div>
            <div class="btnClass column">N</div>
            <div class="btnClass column">M</div>
            <div class="btnClass column">
              <div>&#60;</div>
              <div>,</div>
            </div>
            <div class="btnClass column">
              <div>&#62;</div>
              <div>.</div>
            </div>
            <div class="btnClass column">
              <div>?</div>
              <div>/</div>
            </div>
            <div class="btnClass column" style="width: 173px">Shift</div>
          </div>
          <!-- 第五行 -->
          <div class="allFClass">
            <div class="btnClass column" style="width: 102px">
              <div>Ctrl</div>
            </div>
            <div class="btnClass column" style="width: 80px">
              <img src="@/assets/picture/windows-fill.png" alt="Win" width="50%" />
            </div>
            <div class="btnClass column" style="width: 80px">Alt</div>
            <div class="btnClass column" style="width: 454px"></div>
            <div class="btnClass column" style="width: 80px">Alt</div>
            <div class="btnClass column" style="width: 80px">
              <img src="@/assets/picture/windows-fill.png" alt="Win" width="50%" />
            </div>
            <div class="btnClass column" style="width: 80px">
              <img src="@/assets/picture/复制.png" alt="Win" width="40%" />
            </div>
            <div class="btnClass column" style="width: 102px">
              <div>Ctrl</div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="allFClass">
            <div class="btnClass">Insert</div>
            <div class="btnClass">Home</div>
            <div class="btnClass column">
              <div>Page</div>
              <div>Up</div>
            </div>
          </div>
          <div class="allFClass">
            <div class="btnClass">Delete</div>
            <div class="btnClass">End</div>
            <div class="btnClass">Page Down</div>
          </div>
          <div class="direction">
            <div class="center" style="margin-bottom: 4px">
              <div class="btnClass">▲</div>
            </div>
            <div class="allFClass">
              <div class="btnClass">◀</div>
              <div class="btnClass">▼</div>
              <div class="btnClass">▶</div>
            </div>
          </div>
        </div>
        <div>
          <div class="allFClass">
            <div class="btnClass column">
              <div>Num</div>
              <div>Lock</div>
            </div>
            <div class="btnClass">/</div>
            <div class="btnClass">*</div>
            <div class="btnClass">-</div>
          </div>
          <div style="display: flex">
            <div>
              <div class="allFClass">
                <div class="btnClass">7</div>
                <div class="btnClass">8</div>
                <div class="btnClass">9</div>
              </div>
              <div class="allFClass">
                <div class="btnClass">4</div>
                <div class="btnClass">5</div>
                <div class="btnClass">6</div>
              </div>
              <div class="allFClass">
                <div class="btnClass">1</div>
                <div class="btnClass">2</div>
                <div class="btnClass">3</div>
              </div>
              <div class="allFClass">
                <div class="btnClass" style="width: 143px">0</div>
                <div class="btnClass">.</div>
              </div>
            </div>
            <div>
              <div class="btnClass" style="height: 144px; margin-left: 3px">+</div>
              <div class="btnClass" style="height: 144px; margin-left: 3px; margin-top: 4px">Enter</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#app {
  background-color: rgb(242, 240, 238);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /**解决当视口小于元素宽度时，超出部分不显示背景颜色的问题 */
  overflow: auto;
}
.keyboardBox {
  padding: 50px;
  background: rgb(212, 210, 208);
  border-radius: 40px;
  gap: 30px;
}
.upBoard {
  display: flex;
  /*  间距 */
  gap: 30px;
}
.allFClass {
  display: flex;
  gap: 3px;
  margin-bottom: 4px;
}
.column {
  display: flex;
  flex-direction: column;
}
.direction {
  margin-top: auto;
}
.btnClass {
  background-color: rgb(242, 240, 238);
  width: 70px;
  height: 70px;
  /**图片在里面居中显示 */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  /**利用盒阴影营造立体感 */
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2), -10px -10px 30px rgba(255, 255, 255, 1);
  transition: all 0.2s ease-out;
}

.btnClass:hover {
  cursor: pointer;
  box-shadow: 0 0 0 rgb(219, 219, 219), 0 0 0 rgba(255, 255, 255, 0.7), inset 10px 10px 20px rgba(187, 187, 187, 0.4), inset -18px -18px 20px rgba(255, 255, 255, 0.5);
  font-size: 15px;
  transition: all 0.2s ease-out;
}
.downBoard {
  margin-top: 20px;
  display: flex;
  gap: 30px;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
