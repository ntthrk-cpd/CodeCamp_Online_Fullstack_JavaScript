### CodeCamp # 5 <br>
Nattharika Cheepandung <br>
<br>
<br>

# Lab1 : HTTP

&emsp;ทดสอบเปิดหน้าเว็บ http://info.cern.ch/Proposal.html และดูการทำงานของหน้าเว็บจาก Chrome DevTools ในแท็บ Network (ctrl+shift+j >> Network tab) ได้ผลดังรูป <br>

![image_1](./images_html_lab1/Screenshot%20from%202023-09-19%2018-57-00.png)

ด้วยความเร็วเน็ตขณะทดสอบ ครั้งแรกในการเปิดหน้าเว็บใช้เวลา load 2.29 s โดยมี requests 20 file 120 kB transferred และ 166 kB resources

![image_2](./images_html_lab1/Screenshot%20from%202023-09-19%2019-10-24.png)

ทำการ reload หน้าเว็บอีกครั้ง (ctrl+R) โดยให้เก็บ cache ด้วย จะเห็นว่าค่า transferred เหลือ 8.0 kB และค่า load อยู่ที่ 1.81 s บ่งบอกว่าการ load หน้าเว็บเดิมโดยเก็บ cache ทำให้การโหลดหน้าเว็บได้เร็วขึ้น

![image_3](./images_html_lab1/Screenshot%20from%202023-09-20%2014-37-20.png)

และจากภาพด้านบนเมื่อ reload ในโหมด offline ในส่วน memory cache คือไฟล์ .png 3 ภาพ

ref. -> https://developer.chrome.com/docs/devtools/network/


