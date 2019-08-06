# Generated by Django 2.2.3 on 2019-08-06 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wakeapp', '0002_hostcategory_color'),
    ]

    operations = [
        migrations.RenameField(
            model_name='host',
            old_name='name',
            new_name='title',
        ),
        migrations.RenameField(
            model_name='hostcategory',
            old_name='name',
            new_name='title',
        ),
        migrations.AddField(
            model_name='host',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='hostcategory',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]