import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jspdf, { jsPDF } from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'page-to-pdf';
  ngOnInit() {
    // this.convetToPDF();
  }
  public convetToPDF() {
    var data: any = document.getElementById('content');
    html2canvas(data, {
      scrollX: 0,
      scrollY: -window.scrollY,
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.offsetHeight,
    }).then((canvas) => {
      // var imgWidth = 208;
      // var pageHeight = 295;
      // var imgHeight = (canvas.height * imgWidth) / canvas.width;
      // var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf(); // A4 size page of PDF
      const imgProps = pdf.getImageProperties(contentDataURL);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('new-file.pdf'); // Generated PDF
    });
  }
}
